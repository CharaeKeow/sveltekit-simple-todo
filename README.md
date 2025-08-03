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

### Data Fetching and Mutation

Due to time constraint, I decided to not use database, but instead the todo list in memory. API routes are created for managing todos (GET and POST). Form action is used to handle the create task form submission (by calling the API route behind the scene).

Loading the todos data is done on the server by using the `load` function. I did try directly using `await` in `page.svelte`, but it doesn't work except I turn on an experimental feature, but decided to skip and not explore that route first. (I think that might be Svelte's version of React Server Components?)

### Looping through todos and props passing

Quite interesting that Svelte uses `{#each}` (expected it to be `for`). And find it cool that I don't have to pass in `key` prop like in React. Props passing does take time for me to get used to, but looks straightforward and simple to me.

My only complain so far is all the JS code needs to be in the `<script>` tag, but it's not a deal breaker (and one could argue that this makes the code more organized?)
