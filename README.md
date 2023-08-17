# Basic ReactJS Template ⚛️

Template for basic ReactJS applications with TypeScript. Builded with [Vite](https://vitejs.dev).

## Table of contents
- [Most Important Installed Packages](#most-important-installed-packages)
- [Folder Structure](#folder-structure)
- [Names](#names)
- [Technologies](#technologies)
- [Setup](#setup)
- [Author](#author)
- [Special Thanks](#special-thanks)

## Most Important Installed Packages

**Styles**

- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://www.tailwind-variants.org)

**Lint and Formatter**

- [Eslint](https://eslint.org)
  - [Eslint for Prettier](https://github.com/prettier/eslint-config-prettier)
  - [Eslint for React Hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
  - [Eslint for Import Helpers](https://github.com/Tibfib/eslint-plugin-import-helpers/tree/master)
- [Prettier](https://prettier.io)
  - [Prettier for Tailwind CSS](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

**Routes**

- [React Router DOM](https://github.com/remix-run/react-router)

**API Usage**

- [Axios](https://axios-http.com/ptbr/docs/intro)

**Unit Tests**

- [Jest](https://jestjs.io/pt-BR/)

## Folder Structure

```
.
│
├── src
│   ├── pages
│   │   └── home
│   │       └── page.tsx
│   ├── components
│   │   ├── Navbar.tsx
│   │   └── Button.tsx
│   └── api
│       └── cep.ts
│
└── __tests__
    ├── components
    │   ├── Navbar.test.tsx
    │   └── Button.test.tsx
    └── api
        └── cep.test.ts
```

## Names

- **Variables**

  - camelCase (ex. regexEmail, userId)

- **Methods**

  - camelCase (ex. getItemById, getAllItemsByUser)

- **Folders and Directories**

  - snake_case (ex. create_user)

- **Components**

  - First letter capitalized (ex. Navbar.tsx, Button.tsx)

- **Tests**

  - Sufix **`.test.ts`** (ex. button.test.ts)

## Technologies

This project was created with:

- Node - v18.16
- Yarn - v1.22.19

## Setup

To run this project, clone this repository and use yarn:

```console
  cd basic-react-template
  yarn
  yarn dev
```

## Author

- [Enzo Sakamoto](https://github.com/enzosakamoto)

## Special Thanks

- [Dev. Community Mauá](https://github.com/Maua-Dev/)
