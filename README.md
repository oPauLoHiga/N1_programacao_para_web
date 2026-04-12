# N1 Extensão - Programação para Web

Atividade em grupo da disciplina de Programação Web.

## Integrantes

- Paulo José Higa Freitas
- João Vitor Alves Bittencourt
- Celso Teixeira de Oliveira Júnior
- Lara Rodrigues Holanda Leal

## Entrega

Este repositório contém a parte de páginas estáticas HTML/CSS do portal de notícias **Fake News**.

A pasta `WebMec/` mantém os documentos e imagens iniciais do projeto. A implementação final do portal está em `fakenews_grupo_99/`.

## Como abrir

Abra o projeto no VS Code e execute com a extensão Live Server a partir deste arquivo:

```text
fakenews_grupo_99/index.html
```

Também é possível abrir o arquivo diretamente no navegador, mas o Live Server é o formato indicado no enunciado.

## Regras atendidas

- HTML e CSS puro.
- Sem JavaScript.
- Sem React, Bootstrap, Tailwind, CDN ou outros frameworks/bibliotecas.
- Navegação entre páginas por links.
- Estrutura de pastas conforme o enunciado.
- Imagens locais em `assets/images`.
- CSS centralizado em `assets/css/estilo.css`.
- Telas estáticas para as áreas pública, leitor, autor e superadmin.
- Telas de CRUD com listar todos, criar, exibir, atualizar e apagar.

## Estrutura

```text
fakenews_grupo_99/
  assets/
    css/
      estilo.css
    images/
      logo.png
      noticia-cidade.png
      noticia-cultura.png
      noticia-saude.png
      noticia-tecnologia.png
      perfis/
        user1.png
        user2.png
  publico/
    noticias.html
    noticia.html
    login.html
    cadastro.html
  leitor/
    feed.html
    perfil.html
  autor/
    noticias.html
    noticia-crud.html
  superadmin/
    dashboard.html
    uf-crud.html
    cidade-crud.html
    tag-crud.html
  index.html
```

## Fluxos implementados

| Área | Páginas |
| --- | --- |
| Público | início, listagem de notícias, detalhe da notícia, login e cadastro |
| Leitor | feed personalizado e perfil |
| Autor | painel de notícias e CRUD de notícia |
| Superadmin | dashboard, CRUD de UF, CRUD de cidade e CRUD de tag |

## CRUDs

As páginas abaixo possuem as cinco partes pedidas quando o enunciado cita CRUD:

- `fakenews_grupo_99/autor/noticia-crud.html`
- `fakenews_grupo_99/superadmin/uf-crud.html`
- `fakenews_grupo_99/superadmin/cidade-crud.html`
- `fakenews_grupo_99/superadmin/tag-crud.html`

## Validação

A entrega foi revisada para garantir que:

- todos os links e imagens locais existem;
- não há arquivos de Node/TypeScript ou dependências sobrando;
- não há uso de frameworks, scripts ou CDN;
- a navegação principal funciona a partir da página inicial.

## Roteiro rápido

Consulte `ENTREGA.md` para uma sequência objetiva de apresentação.
