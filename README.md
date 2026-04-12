# N1 Extensão - Programação para Web

Atividade em grupo.

## Integrantes

- Paulo José Higa Freitas
- João Vitor Alves Bittencourt
- Celso Teixeira de Oliveira Júnior
- Lara Rodrigues Holanda Leal

## Entrega deste repositório

Este repositório contém a parte de páginas estáticas HTML/CSS do portal de notícias **Fake News**.

A pasta `WebMec/` mantém os documentos/imagens iniciais do projeto.

## Como abrir

Abra pelo VS Code com a extensão Live Server:

```text
fakenews_grupo_99/index.html
```

Também é possível abrir o arquivo `index.html` diretamente pelo navegador, mas o Live Server é o formato pedido no enunciado.

## Regras atendidas

- HTML e CSS puro.
- Sem JavaScript.
- Sem React, Bootstrap, Tailwind ou outros frameworks.
- Navegação entre páginas por links.
- Estrutura de pastas conforme o enunciado.
- Telas estáticas para as áreas pública, leitor, autor e superadmin.
- Telas de CRUD com listar, criar, exibir, atualizar e apagar.

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

## Fluxos

| Área | Páginas |
| --- | --- |
| Público | início, listagem de notícias, detalhe da notícia, login e cadastro |
| Leitor | feed personalizado e perfil |
| Autor | painel de notícias e CRUD de notícia |
| Superadmin | dashboard, CRUD de UF, CRUD de cidade e CRUD de tag |

## CRUDs

As páginas abaixo possuem as cinco partes pedidas no enunciado: listar todos, criar, exibir, atualizar e apagar.

- `fakenews_grupo_99/autor/noticia-crud.html`
- `fakenews_grupo_99/superadmin/uf-crud.html`
- `fakenews_grupo_99/superadmin/cidade-crud.html`
- `fakenews_grupo_99/superadmin/tag-crud.html`

## Roteiro rápido

Consulte `ENTREGA.md` para uma sequência simples de apresentação.
