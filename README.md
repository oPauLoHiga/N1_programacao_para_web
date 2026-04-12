# N1 Extensão - Programação para Web

Atividade em grupo.

## Integrantes

- Paulo José Higa Freitas
- João Vitor Alves Bittencourt
- Celso Teixeira de Oliveira Júnior
- Lara Rodrigues Holanda Leal

## Entregas

Este repositório reúne os materiais da N1 de Programação Web:

- Documentação inicial na pasta `WebMec/`.
- Portal estático de notícias Fake News em `fakenews_grupo_99/`.
- CLI em TypeScript com Drizzle ORM e SQLite.

## Portal HTML/CSS

Abra pelo VS Code com Live Server:

```text
fakenews_grupo_99/index.html
```

O portal usa apenas HTML e CSS, sem JavaScript, frameworks ou bibliotecas externas.

### Estrutura do portal

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

### Fluxos do portal

| Área | Páginas |
| --- | --- |
| Público | início, listagem de notícias, detalhe da notícia, login e cadastro |
| Leitor | feed personalizado e perfil |
| Autor | painel de notícias e CRUD de notícia |
| Superadmin | dashboard, CRUD de UF, CRUD de cidade e CRUD de tag |

Quando o enunciado pede CRUD, as telas incluem: listar todos, criar, exibir, atualizar e apagar.

## CLI TypeScript

Aplicação de linha de comando para cadastro e consulta de notícias por cidade, UF e tags, usando TypeScript, Drizzle ORM e SQLite.

### Requisitos

- Node.js 18 ou superior
- npm

### Instalar dependências

```bash
npm install
```

### Executar

```bash
npm start
```

Se o PowerShell bloquear `npm.ps1`, use:

```bash
npm.cmd start
```

### Banco de dados

- Arquivo SQLite: `data/noticias.db`
- Migrações SQL: `drizzle/`
- Schema Drizzle: `src/db/schema.ts`

O campo `data_criacao` da tabela `noticia` é preenchido automaticamente pelo banco com `datetime('now')`.

### Tabelas

```text
uf          (id, nome, sigla)
cidade      (id, nome, uf_id)
noticia     (id, titulo, texto, cidade_id, data_criacao)
tag         (id, nome)
noticia_tag (id, noticia_id, tag_id)
```

A relação entre notícia e tag é muitos-para-muitos: uma notícia pode ter várias tags e uma tag pode estar em várias notícias.

### Menu do CLI

| Opção | Descrição |
| --- | --- |
| 0 | Cadastrar notícia |
| 1 | Exibir todas as notícias, mais recentes primeiro |
| 2 | Exibir todas as notícias, mais antigas primeiro |
| 3 | Exibir notícias de um estado específico |
| 4 | Exibir todas as notícias agrupadas por estado |
| 5 | Cadastrar UF |
| 6 | Cadastrar cidade |
| 7 | Sair |
| 8 | Cadastrar tag |
| 9 | Listar tags |

### Comandos úteis

Rodar somente as migrações:

```bash
npm run db:migrate
```

Compilar o TypeScript:

```bash
npm run build
```

## Roteiro de apresentação

Consulte `ENTREGA.md` para uma sequência rápida de demonstração do portal e do CLI.
