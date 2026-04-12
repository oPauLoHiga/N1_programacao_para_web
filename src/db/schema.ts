import { sql } from "drizzle-orm";
import { integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const uf = sqliteTable("uf", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  nome: text("nome").notNull(),
  sigla: text("sigla").notNull().unique(),
});

export const cidade = sqliteTable("cidade", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  nome: text("nome").notNull(),
  ufId: integer("uf_id")
    .notNull()
    .references(() => uf.id),
});

export const noticia = sqliteTable("noticia", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  titulo: text("titulo").notNull(),
  texto: text("texto").notNull(),
  cidadeId: integer("cidade_id")
    .notNull()
    .references(() => cidade.id),
  dataCriacao: text("data_criacao")
    .notNull()
    .default(sql`(datetime('now'))`),
});

export const tag = sqliteTable("tag", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  nome: text("nome").notNull().unique(),
});

export const noticiaTag = sqliteTable(
  "noticia_tag",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    noticiaId: integer("noticia_id")
      .notNull()
      .references(() => noticia.id),
    tagId: integer("tag_id")
      .notNull()
      .references(() => tag.id),
  },
  (table) => ({
    noticiaTagUnique: uniqueIndex("noticia_tag_noticia_id_tag_id_unique").on(
      table.noticiaId,
      table.tagId,
    ),
  }),
);
