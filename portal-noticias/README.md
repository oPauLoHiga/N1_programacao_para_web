# Portal Fake News

Projeto academico da disciplina de Programacao para Web, desenvolvido com React, TypeScript, Vite e React Router.

O sistema simula um portal de noticias com areas para:

- publico
- leitor
- autor
- superadmin

O visual foi mantido simples, limpo e discreto, com foco em preto, branco e vermelho, sem uso de imagens.

## Tecnologias usadas

- React
- React Router
- TypeScript
- Vite
- CSS puro

## Como executar o projeto

### 1. Instalar as dependencias

```bash
npm install
```

### 2. Rodar em desenvolvimento

```bash
npm run dev
```

Depois disso, o terminal vai mostrar a URL local do projeto.

Exemplo:

```text
Local: http://127.0.0.1:4173/
```

Se essa porta estiver ocupada, o Vite pode subir em outra, como `4174`.

## Scripts disponiveis

### Rodar em desenvolvimento

```bash
npm run dev
```

### Gerar build de producao

```bash
npm run build
```

### Validar tipos

```bash
npm run typecheck
```

### Rodar a versao de producao

Depois de gerar o build:

```bash
npm start
```

## Rotas principais

- `/` - Home
- `/login` - Login
- `/cadastro` - Cadastro
- `/noticias` - Noticias publicas
- `/noticias/mobilidade` - Pagina de noticia
- `/leitor/feed` - Feed do leitor
- `/leitor/perfil` - Perfil do leitor
- `/autor/noticias` - Noticias do autor
- `/autor/noticias/crud` - CRUD de noticias do autor
- `/superadmin` - Dashboard do superadmin
- `/superadmin/ufs` - CRUD de UFs
- `/superadmin/cidades` - CRUD de cidades
- `/superadmin/tags` - CRUD de tags

## Estrutura basica

```text
portal-noticias/
|- app/
|  |- components/
|  |- lib/
|  |- routes/
|  |- app.css
|  |- root.tsx
|  `- routes.ts
|- public/
|- package.json
|- tsconfig.json
`- vite.config.ts
```

## Organizacao do projeto

- `app/components/`: componentes reutilizaveis, como layout e cards
- `app/lib/`: utilitarios simples, como mapa de rotas
- `app/routes/`: paginas do sistema
- `app/app.css`: estilo global da aplicacao

## Observacoes

- Este projeto foi adaptado de uma versao estatica em HTML e CSS.
- A navegacao foi reorganizada com React Router.
- Os formularios e CRUDs estao em formato visual, com foco academico e demonstrativo.

## Autor

Projeto desenvolvido para fins academicos na disciplina de Programacao para Web.
