# Anickme Personal Blog

Look at the [https://anickme.github.io/](https://anickme.github.io/), will be updated in future.

## Setup

Make sure to install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production to create static web in `dist` folder:

```bash
npx nuxt generate
```

Push the project into `gh_pages` branch to deploy:

```bash
git subtree push --prefix dist origin gh-pages
```