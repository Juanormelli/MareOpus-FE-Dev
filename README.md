<p align="center">
  <a href="https://github.com/GuilhermeSanchesS/">
    <img src="https://github.com/Juanormelli/MareOpus-FE-Dev/blob/main/public/img/mareohome.png"  alt="Home Mareo" />
  </a>
</p>

<h1 align="center">MAREO</h1>
<p align="center">> Projeto realizado de criar e desnvolver Web plataforma</p>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fzenorocha%2Fzenorocha.com)

<p align="center">
  <img src="https://img.shields.io/static/v1?label=nextjs&message=6.14.6&color=000000&style=flat-square&logo=nextjs"/>
  <img src="https://img.shields.io/static/v1?label=typescript&message=^4.17.1&color=0000FF&style=flat-square&logo=typescript"/>
  <img src="https://img.shields.io/static/v1?label=scss&message=^0.2.4&color=ff69b4&style=flat-square&logo=scss"/>
</p>

<p align="center">
 <a href="#-about">Sobre</a> •
 <a href="#-technology-stack">Tecnologias</a> • 
 <a href="#-running-locally">Instalação</a> • 
  <a href="#-file-structure">Arquivos</a> • 
  <a href="#-deploy-on-vercel">Deploy</a>
</p>

## 📖 About

This repository intends to create a platform for studies and training for professionals in the field of information technology:

>  Este repositório pretende criar uma plataforma de estudos e treinamento para profissionais da área da tecnologia da informação:

### Components included:

- [x] [Traduction](https://github.com/Juanormelli/MareOpus-FE-Dev/tree/main/public/locales)
- [ ] [Avatar](https://github.com/Juanormelli/MareOpus-FE-Dev/tree/main/src/components/Avatar) 


## 🛠 Technology stack

- **Front-end:** [React](https://reactjs.org/) 
  - [Typescript](https://www.typescriptlang.org/) 
  - [SCSS](https://sass-lang.com/) 
- **Back-end:** 
  - [Next.js](https://nextjs.org/)
  - [Prisma](https://prismic.io/)
- **Deployment:** [Vercel](https://vercel.com/)

## ⚙ Running locally 

1. Clone this repo:
   
```sh
$ git clone https://github.com/Juanormelli/MareOpus-FE-Dev.git
```

2. Then go to the project's folder:

```sh
  $ cd MareOpus-FE-Dev.git
```

3. Then go to the project's folder:

```sh
$ npm install
# or
$ yarn
```

4. Run locally:

```sh
$ npm run dev
# or
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## 📂 File structure

The basic file structure for the project is organized in the following way:

```
.
|-- prisma
|-- public
|        |-- audio
|        |-- avatar
|        |-- icon
|        |-- img
|        |-- locales
|        `-- video
`-- src
      |-- components
      |-- contexts
      |-- hooks
      |-- pages
      |-- services
      |-- styles
      `-- types
```

## 🆙 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.