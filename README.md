# SvelteKit Simple TODO App

This app is created using SvelteKit `npx sv create` command, with the Svelte library template is chosen (because I was not sure which one to go for, so decided to go with this, since it helps to setup stuffs like ESLint, Prettier, etc.). `pnpm` is used as the package manager of this simple app.

## Developing

To start the dev server, first install the dependencies (`pnpm install`), then run:

```sh
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev -- --open
```

## Development Logs

This section is my musing as I develop this app.

### Svelte & SvelteKit

On a glance (and as I suspected all this while), Svelte is kinda similar to Vue (_Still prefer React/JSX style tho_). Thanks to my experience in Next, and some of Vue/Nuxt, I can quickly get the hang of both Svelte and SvelteKit (at a very surface level).

### Looping through todos and props passing

Quite interesting that Svelte uses `{#each}` (expected it to be `for`). And find it cool that I don't have to pass in `key` prop like in React. Props passing does take time for me to get used to, but looks straightforward and simple to me.

My only complain so far is all the JS code needs to be in the `<script>` tag, but it's not a deal breaker (and one could argue that this makes the code more organized?)
