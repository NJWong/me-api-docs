# ME-API Docs

This is the API documentation website for ME-API.

## What is ME-API?

ME-API is a RESTful API that gives you information on characters, ships, planets (and much more) from the Mass Effect universe.

It's like SWAPI or PokeAPI, but for Mass Effect!

The API is completely free to use in any of your projects and is especially helpful as a tool when learning new frameworks and languages.

## Tech stack

This website uses the following technologies:

- Next.js (exported as a static website)
- Tailwind CSS
- Headless UI
- Framer Motion
- MDX
- Algolia
- FlexSearch
- Zustand

It is deployed to Cloudflare using the Pages platform and can be viewed live here: https://me-api-docs.pages.dev

## Getting started

### Node version

This Next.js application was developed using Node v19.5.0 as specified in the `.nvmrc`:

```bash
19.5
```

Please make sure you at least have this version installed before you continue. You can use a tool like [Node Version Manager](https://github.com/nvm-sh/nvm) to install the correct version.

### Running the application

First, install the dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.
