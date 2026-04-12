# Roteiro de entrega

## 1. Portal HTML/CSS

Abrir com Live Server:

```text
fakenews_grupo_99/index.html
```

Pontos para mostrar:

- Página inicial com chamadas de notícias.
- Listagem pública em `publico/noticias.html`.
- Detalhe de notícia em `publico/noticia.html`.
- Login e cadastro em `publico/login.html` e `publico/cadastro.html`.
- Área do leitor em `leitor/feed.html` e `leitor/perfil.html`.
- Área do autor em `autor/noticias.html`.
- CRUD de notícias em `autor/noticia-crud.html`.
- Painel do superadmin em `superadmin/dashboard.html`.
- CRUD de UF, cidade e tag em `superadmin/uf-crud.html`, `superadmin/cidade-crud.html` e `superadmin/tag-crud.html`.

## 2. CLI TypeScript

Instalar dependências:

```bash
npm install
```

Rodar o programa:

```bash
npm start
```

Fluxo sugerido para demonstrar:

1. Cadastrar uma UF.
2. Cadastrar uma cidade.
3. Cadastrar duas tags.
4. Cadastrar uma notícia escolhendo a cidade e as tags.
5. Listar notícias mais recentes.
6. Listar notícias por estado.
7. Exibir notícias agrupadas por estado e detalhar uma notícia.

## 3. Requisitos atendidos

- HTML e CSS sem frameworks.
- Estrutura com `assets`, `publico`, `autor`, `leitor`, `superadmin` e `index.html`.
- Telas de CRUD com listar, criar, exibir, atualizar e apagar.
- CLI em TypeScript com Drizzle ORM e SQLite.
- Entidade `tag`.
- Tabela associativa `noticia_tag`.
- Funcionalidades antigas do CLI mantidas.
