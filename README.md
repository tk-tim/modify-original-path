# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

Repro:
1. Open http://localhost:3000/
2. Check if you will be redirected to http://localhost:3000/?cstrackid=123
3. In Console there should be info about html override which is similar to get different content for html from Varnish

Redirection occurs on branch `n3` (with nuxt 3), but does not on `master` (with nuxt 4)