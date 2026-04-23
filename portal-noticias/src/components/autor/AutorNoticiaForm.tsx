import { useMemo, useState } from "react";
import { useNavigate } from "react-router";

import { Button } from "~/components/ui/Button";
import { InputField } from "~/components/ui/InputField";
import { Modal } from "~/components/ui/Modal";
import { NoticiaCard } from "~/components/ui/NoticiaCard";
import { TagBadge } from "~/components/ui/TagBadge";
import { getCidadesPorUf } from "~/data/cidades";
import { getAllTagsUnicos } from "~/data/noticias";
import { ufs } from "~/data/ufs";
import type { Noticia } from "~/types/noticia";

type AutorNoticiaFormProps = {
  initial?: Partial<Noticia>;
  cancelTo: string;
  banner?: string;
  onPrimary: (mode: "rascunho" | "revisao") => void;
};

export function AutorNoticiaForm({ initial, cancelTo, banner, onPrimary }: AutorNoticiaFormProps) {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState(initial?.titulo ?? "");
  const [subtitulo, setSubtitulo] = useState(initial?.subtitulo ?? "");
  const [urlCapa, setUrlCapa] = useState(initial?.imagemCapa ?? "");
  const [conteudo, setConteudo] = useState(initial?.conteudo ?? "");
  const [uf, setUf] = useState(initial?.uf ?? ufs[0]?.sigla ?? "DF");
  const [cidade, setCidade] = useState(initial?.cidadeNome ?? "");
  const [tagsSel, setTagsSel] = useState<string[]>(initial?.tags ?? []);
  const [previewOpen, setPreviewOpen] = useState(false);

  const cidades = useMemo(() => getCidadesPorUf(uf), [uf]);
  const todasTags = getAllTagsUnicos();

  function toggleTag(t: string) {
    setTagsSel((prev) => {
      if (prev.includes(t)) return prev.filter((x) => x !== t);
      if (prev.length >= 5) return prev;
      return [...prev, t];
    });
  }

  const previewNoticia: Noticia = useMemo(
    () => ({
      id: "preview",
      titulo: titulo || "Sem título",
      subtitulo: subtitulo || "Sem subtítulo",
      slug: "preview",
      uf,
      cidadeNome: cidade || "Cidade",
      tags: tagsSel.length ? tagsSel : ["geral"],
      resumo: conteudo.slice(0, 120) || "Resumo aparece aqui.",
      conteudo: conteudo || "Conteúdo",
      meta: "Hoje",
      autor: "Você",
      autorBio: "",
      avatarAutorUrl: "https://i.pravatar.cc/80?img=2",
      imagemCapa: urlCapa || "https://picsum.photos/seed/preview/960/540",
      imagemThumb: urlCapa || "https://picsum.photos/seed/preview/200/140",
      visualizacoes: 0,
      publicada: false,
    }),
    [titulo, subtitulo, uf, cidade, tagsSel, conteudo, urlCapa],
  );

  return (
    <div className="autor-form-layout">
      {banner ? <div className="banner-warn">{banner}</div> : null}

      <div className="autor-form-grid">
        <div className="form-grid">
          <InputField
            id="titulo"
            label="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <InputField
            id="subtitulo"
            label="Subtítulo"
            value={subtitulo}
            onChange={(e) => setSubtitulo(e.target.value)}
          />
          <InputField
            id="capa"
            label="URL da imagem de capa"
            value={urlCapa}
            onChange={(e) => setUrlCapa(e.target.value)}
          />
          {urlCapa ? (
            <img alt="" className="preview-capa-thumb" height={160} src={urlCapa} width={280} />
          ) : null}

          <div className="field">
            <label htmlFor="conteudo">Conteúdo</label>
            <textarea
              id="conteudo"
              rows={15}
              value={conteudo}
              onChange={(e) => setConteudo(e.target.value)}
            />
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="uf-sel">UF</label>
              <select id="uf-sel" value={uf} onChange={(e) => setUf(e.target.value)}>
                {ufs.map((u) => (
                  <option key={u.id} value={u.sigla}>
                    {u.sigla}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="cid-sel">Cidade</label>
              <select
                id="cid-sel"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              >
                <option value="">Selecione</option>
                {cidades.map((c) => (
                  <option key={c.id} value={c.nome}>
                    {c.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <fieldset className="tags-fieldset">
            <legend>Tags (máx. 5)</legend>
            <div className="tag-cloud">
              {todasTags.map((t) => (
                <label key={t} className="tag-check">
                  <input
                    checked={tagsSel.includes(t)}
                    type="checkbox"
                    onChange={() => toggleTag(t)}
                  />
                  <TagBadge slug={t} />
                </label>
              ))}
            </div>
          </fieldset>

          <div className="actions">
            <Button type="button" onClick={() => onPrimary("rascunho")}>
              Salvar como rascunho
            </Button>
            <Button type="button" variant="secondary" onClick={() => onPrimary("revisao")}>
              Enviar para revisão
            </Button>
            <Button type="button" variant="secondary" onClick={() => navigate(cancelTo)}>
              Cancelar
            </Button>
          </div>
        </div>

        <div className="autor-form-preview desktop-only">
          <h3>Preview ao vivo</h3>
          <NoticiaCard preview noticia={previewNoticia} />
        </div>
      </div>

      <div className="mobile-only" style={{ marginTop: 12 }}>
        <Button type="button" variant="secondary" onClick={() => setPreviewOpen(true)}>
          Preview
        </Button>
      </div>

      {previewOpen ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setPreviewOpen(false)}>
          <div className="modal-backdrop__inner" onClick={(e) => e.stopPropagation()}>
            <Modal title="Preview">
              <NoticiaCard preview noticia={previewNoticia} />
              <Button type="button" variant="secondary" onClick={() => setPreviewOpen(false)}>
                Fechar
              </Button>
            </Modal>
          </div>
        </div>
      ) : null}
    </div>
  );
}
