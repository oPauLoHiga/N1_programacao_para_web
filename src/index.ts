import { asc, desc, eq, inArray } from "drizzle-orm";
import { migrate } from "drizzle-orm/libsql/migrator";
import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { fileURLToPath } from "node:url";
import { db } from "./db/index.js";
import { cidade, noticia, noticiaTag, tag, uf } from "./db/schema.js";

const migrationsFolder = fileURLToPath(new URL("../drizzle", import.meta.url));

async function ensureMigrated(): Promise<void> {
  await migrate(db, { migrationsFolder });
}

const rl = readline.createInterface({ input, output });
const lineIter = rl[Symbol.asyncIterator]();

async function ask(prompt: string): Promise<string> {
  output.write(prompt);
  const { done, value } = await lineIter.next();
  if (done) return "";
  return String(value).trim();
}

function printMainMenu(): void {
  console.log(`0 - Cadastrar notícia
1 - Exibir todas as notícias (mais recentes primeiro)
2 - Exibir todas as notícias (mais antigas primeiro)
3 - Exibir notícias de um estado específico
4 - Exibir todas as notícias agrupadas por estado
5 - Cadastrar UF
6 - Cadastrar cidade
7 - Sair
8 - Cadastrar tag
9 - Listar tags`);
}

type NoticiaRow = {
  id: number;
  titulo: string;
  texto: string;
  dataCriacao: string;
  cidadeNome: string;
  ufSigla: string;
  tags: string[];
};

type NoticiaBaseRow = Omit<NoticiaRow, "tags">;

function parseIndexes(inputValue: string, max: number): number[] | null {
  const value = inputValue.trim();
  if (value.length === 0) return [];

  const indexes = value.split(",").map((part) => Number.parseInt(part.trim(), 10));
  if (indexes.some((idx) => !Number.isFinite(idx) || idx < 1 || idx > max)) {
    return null;
  }

  return [...new Set(indexes)];
}

async function attachTags(rows: NoticiaBaseRow[]): Promise<NoticiaRow[]> {
  if (rows.length === 0) return [];

  const tagRows = await db
    .select({
      noticiaId: noticiaTag.noticiaId,
      nome: tag.nome,
    })
    .from(noticiaTag)
    .innerJoin(tag, eq(noticiaTag.tagId, tag.id))
    .where(
      inArray(
        noticiaTag.noticiaId,
        rows.map((row) => row.id),
      ),
    )
    .orderBy(asc(tag.nome));

  const tagsByNoticia = new Map<number, string[]>();
  for (const row of tagRows) {
    const list = tagsByNoticia.get(row.noticiaId) ?? [];
    list.push(row.nome);
    tagsByNoticia.set(row.noticiaId, list);
  }

  return rows.map((row) => ({
    ...row,
    tags: tagsByNoticia.get(row.id) ?? [],
  }));
}

async function fetchNoticias(order: "desc" | "asc"): Promise<NoticiaRow[]> {
  const orderFn = order === "desc" ? desc : asc;
  const rows = await db
    .select({
      id: noticia.id,
      titulo: noticia.titulo,
      texto: noticia.texto,
      dataCriacao: noticia.dataCriacao,
      cidadeNome: cidade.nome,
      ufSigla: uf.sigla,
    })
    .from(noticia)
    .innerJoin(cidade, eq(noticia.cidadeId, cidade.id))
    .innerJoin(uf, eq(cidade.ufId, uf.id))
    .orderBy(orderFn(noticia.dataCriacao));

  return attachTags(rows);
}

async function fetchNoticiasByUf(
  ufId: number,
  order: "desc" | "asc",
): Promise<NoticiaRow[]> {
  const orderFn = order === "desc" ? desc : asc;
  const rows = await db
    .select({
      id: noticia.id,
      titulo: noticia.titulo,
      texto: noticia.texto,
      dataCriacao: noticia.dataCriacao,
      cidadeNome: cidade.nome,
      ufSigla: uf.sigla,
    })
    .from(noticia)
    .innerJoin(cidade, eq(noticia.cidadeId, cidade.id))
    .innerJoin(uf, eq(cidade.ufId, uf.id))
    .where(eq(uf.id, ufId))
    .orderBy(orderFn(noticia.dataCriacao));

  return attachTags(rows);
}

function formatLinha(n: NoticiaRow): string {
  const tags = n.tags.length > 0 ? ` | Tags: ${n.tags.join(", ")}` : "";
  return `${n.dataCriacao} | ${n.titulo} — ${n.cidadeNome} (${n.ufSigla})${tags}`;
}

async function listarTodas(order: "desc" | "asc"): Promise<void> {
  const rows = await fetchNoticias(order);
  if (rows.length === 0) {
    console.log("\n(Nenhuma notícia cadastrada.)\n");
  } else {
    console.log("");
    for (const r of rows) {
      console.log(formatLinha(r));
    }
    console.log("");
  }
  for (;;) {
    const cmd = (await ask("(z) Voltar\n")).toLowerCase();
    if (cmd === "z") break;
    console.log("");
  }
}

async function cadastrarNoticia(): Promise<void> {
  const cidades = await db.select().from(cidade).orderBy(asc(cidade.nome));
  if (cidades.length === 0) {
    console.log("\nNão há cidades cadastradas. Cadastre uma UF e uma cidade antes.\n");
    return;
  }
  console.log("\nCidades disponíveis:");
  cidades.forEach((c, i) => {
    console.log(`${i + 1} - ${c.nome}`);
  });
  const titulo = await ask("Título: ");
  const texto = await ask("Texto: ");
  const idxStr = await ask(`Número da cidade (1–${cidades.length}): `);
  const idx = Number.parseInt(idxStr, 10);
  if (!Number.isFinite(idx) || idx < 1 || idx > cidades.length) {
    console.log("\nSeleção inválida.\n");
    return;
  }
  const cid = cidades[idx - 1]!;

  const tagsDisponiveis = await db.select().from(tag).orderBy(asc(tag.nome));
  let tagIds: number[] = [];
  if (tagsDisponiveis.length > 0) {
    console.log("\nTags disponíveis:");
    tagsDisponiveis.forEach((t, i) => {
      console.log(`${i + 1} - ${t.nome}`);
    });
    const tagsStr = await ask(
      "Números das tags separados por vírgula (Enter para nenhuma): ",
    );
    const tagIndexes = parseIndexes(tagsStr, tagsDisponiveis.length);
    if (tagIndexes === null) {
      console.log("\nSeleção de tags inválida.\n");
      return;
    }
    tagIds = tagIndexes.map((tagIndex) => tagsDisponiveis[tagIndex - 1]!.id);
  } else {
    console.log("\nNenhuma tag cadastrada. A notícia será salva sem tags.\n");
  }

  const inserted = await db.insert(noticia).values({
    titulo,
    texto,
    cidadeId: cid.id,
  }).returning({ id: noticia.id });

  const noticiaId = inserted[0]!.id;
  if (tagIds.length > 0) {
    await db.insert(noticiaTag).values(
      tagIds.map((tagId) => ({
        noticiaId,
        tagId,
      })),
    );
  }

  console.log("\nNotícia cadastrada.\n");
}

async function noticiasPorEstado(): Promise<void> {
  const ufs = await db.select().from(uf).orderBy(asc(uf.sigla));
  if (ufs.length === 0) {
    console.log("\nNão há UFs cadastradas.\n");
    return;
  }
  console.log("\nEstados:");
  ufs.forEach((u, i) => {
    console.log(`${i + 1} - ${u.nome} (${u.sigla})`);
  });
  const idxStr = await ask(`Informe o número do estado (1–${ufs.length}): `);
  const idx = Number.parseInt(idxStr, 10);
  if (!Number.isFinite(idx) || idx < 1 || idx > ufs.length) {
    console.log("\nSeleção inválida.\n");
    return;
  }
  const selected = ufs[idx - 1]!;

  for (;;) {
    console.log(`
(a) Ordenar por mais recentes
(b) Ordenar por mais antigas
(z) Voltar`);
    const cmd = (await ask("Opção: ")).toLowerCase();
    if (cmd === "z") break;
    if (cmd === "a") {
      const rows = await fetchNoticiasByUf(selected.id, "desc");
      console.log("");
      if (rows.length === 0) console.log("(Nenhuma notícia neste estado.)");
      else for (const r of rows) console.log(formatLinha(r));
      console.log("");
    } else if (cmd === "b") {
      const rows = await fetchNoticiasByUf(selected.id, "asc");
      console.log("");
      if (rows.length === 0) console.log("(Nenhuma notícia neste estado.)");
      else for (const r of rows) console.log(formatLinha(r));
      console.log("");
    } else {
      console.log("\nOpção inválida.\n");
    }
  }
}

type AgrupadaEntry = { seq: number; titulo: string; cidadeNome: string; tags: string[] };

async function noticiasAgrupadasPorEstado(): Promise<void> {
  for (;;) {
    const rowsSemTags = await db
      .select({
        id: noticia.id,
        titulo: noticia.titulo,
        texto: noticia.texto,
        dataCriacao: noticia.dataCriacao,
        cidadeNome: cidade.nome,
        ufSigla: uf.sigla,
      })
      .from(noticia)
      .innerJoin(cidade, eq(noticia.cidadeId, cidade.id))
      .innerJoin(uf, eq(cidade.ufId, uf.id))
      .orderBy(asc(uf.sigla), desc(noticia.dataCriacao));

    const rows = await attachTags(rowsSemTags);
    const bySigla = new Map<string, typeof rows>();
    for (const r of rows) {
      const list = bySigla.get(r.ufSigla) ?? [];
      list.push(r);
      bySigla.set(r.ufSigla, list);
    }

    const siglasOrdenadas = [...bySigla.keys()].sort((a, b) => a.localeCompare(b));

    const bySeq = new Map<number, { titulo: string; texto: string; tags: string[] }>();
    let seq = 1;
    const blocos: { sigla: string; entries: AgrupadaEntry[] }[] = [];

    for (const s of siglasOrdenadas) {
      const list = bySigla.get(s)!;
      const entries: AgrupadaEntry[] = [];
      for (const r of list) {
        entries.push({
          seq,
          titulo: r.titulo,
          cidadeNome: r.cidadeNome,
          tags: r.tags,
        });
        bySeq.set(seq, { titulo: r.titulo, texto: r.texto, tags: r.tags });
        seq += 1;
      }
      blocos.push({ sigla: s, entries });
    }

    console.log("\n--- LISTA AGRUPADA POR ESTADOS ---\n");
    if (blocos.length === 0) {
      console.log("(Nenhuma notícia cadastrada.)\n");
    } else {
      for (const b of blocos) {
        console.log(`# ${b.sigla}`);
        for (const e of b.entries) {
          const tags = e.tags.length > 0 ? ` [${e.tags.join(", ")}]` : "";
          console.log(`${e.seq} - ${e.titulo} - ${e.cidadeNome}${tags}`);
        }
        console.log("");
      }
    }
    console.log("(d) Detalhar notícia");
    console.log("(z) Voltar");
    const cmd = (await ask("Opção: ")).toLowerCase();
    if (cmd === "z") break;
    if (cmd === "d") {
      if (bySeq.size === 0) {
        console.log("\nNão há notícias para detalhar.\n");
        continue;
      }
      const nStr = await ask("Informe o número da notícia: ");
      const n = Number.parseInt(nStr, 10);
      const det = bySeq.get(n);
      if (!det) {
        console.log("\nNúmero inválido.\n");
        continue;
      }
      console.log("");
      console.log(`Título: ${det.titulo}`);
      console.log(`Texto : ${det.texto}`);
      console.log(`Tags  : ${det.tags.length > 0 ? det.tags.join(", ") : "sem tags"}`);
      console.log("");
    }
  }
}

async function cadastrarUf(): Promise<void> {
  const nome = await ask("Nome da UF: ");
  const sigla = (await ask("Sigla: ")).toUpperCase();
  try {
    await db.insert(uf).values({ nome, sigla });
    console.log("\nUF cadastrada.\n");
  } catch {
    console.log("\nNão foi possível cadastrar (sigla duplicada ou dados inválidos).\n");
  }
}

async function cadastrarCidade(): Promise<void> {
  const ufs = await db.select().from(uf).orderBy(asc(uf.sigla));
  if (ufs.length === 0) {
    console.log("\nNão há UFs cadastradas.\n");
    return;
  }
  console.log("\nUFs disponíveis:");
  ufs.forEach((u, i) => {
    console.log(`${i + 1} - ${u.nome} (${u.sigla})`);
  });
  const nome = await ask("Nome da cidade: ");
  const idxStr = await ask(`Número da UF (1–${ufs.length}): `);
  const idx = Number.parseInt(idxStr, 10);
  if (!Number.isFinite(idx) || idx < 1 || idx > ufs.length) {
    console.log("\nSeleção inválida.\n");
    return;
  }
  const u = ufs[idx - 1]!;
  await db.insert(cidade).values({ nome, ufId: u.id });
  console.log("\nCidade cadastrada.\n");
}

async function cadastrarTag(): Promise<void> {
  const nome = await ask("Nome da tag: ");
  try {
    await db.insert(tag).values({ nome });
    console.log("\nTag cadastrada.\n");
  } catch {
    console.log("\nNão foi possível cadastrar (tag duplicada ou dados inválidos).\n");
  }
}

async function listarTags(): Promise<void> {
  const rows = await db.select().from(tag).orderBy(asc(tag.nome));
  console.log("");
  if (rows.length === 0) {
    console.log("(Nenhuma tag cadastrada.)");
  } else {
    for (const r of rows) {
      console.log(`${r.id} - ${r.nome}`);
    }
  }
  console.log("");

  for (;;) {
    const cmd = (await ask("(z) Voltar\n")).toLowerCase();
    if (cmd === "z") break;
    console.log("");
  }
}

async function main(): Promise<void> {
  await ensureMigrated();
  console.log("CLI de notícias — SQLite + Drizzle\n");

  for (;;) {
    printMainMenu();
    const op = await ask("Escolha uma opção: ");

    switch (op) {
      case "0":
        await cadastrarNoticia();
        break;
      case "1":
        await listarTodas("desc");
        break;
      case "2":
        await listarTodas("asc");
        break;
      case "3":
        await noticiasPorEstado();
        break;
      case "4":
        await noticiasAgrupadasPorEstado();
        break;
      case "5":
        await cadastrarUf();
        break;
      case "6":
        await cadastrarCidade();
        break;
      case "7":
        console.log("\nAté logo.\n");
        rl.close();
        return;
      case "8":
        await cadastrarTag();
        break;
      case "9":
        await listarTags();
        break;
      default:
        console.log("\nOpção inválida.\n");
    }
  }
}

main().catch((err) => {
  console.error(err);
  rl.close();
  process.exitCode = 1;
});
