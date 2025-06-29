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

or

```bash
git push origin `git subtree split --prefix dist origin`:gh-pages --force
```

or if those two doesn't works:

```bash
git checkout main # you can avoid this line if you are in main
git subtree split --prefix dist -b gh-pages # create a local gh-pages branch containing the splitted output folder
git push -f origin gh-pages:gh-pages # force the push of the gh-pages branch to the remote gh-pages branch at origin
git branch -D gh-pages # delete the local gh-pages because you will need it: ref
```