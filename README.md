# travelling salesman

a svelte, svelteKit and threlte (three.js) demo project.

URL: [Traveling Salesman](https://travelling-salesman.netlify.app/)

## preview
![Travelling-Salesman](https://i.imgur.com/LEyGnzQ.png)
### finished
- [x] refactor header into component
- [x] update meta data + cleanup
- [x] refactor sections into section components
- [x] incorporate/work with tweened from svelte/motion (read doc: https://svelte.dev/tutorial/tweened)
- [x] menu items + finish nav bar
- [x] dynamically display components based on state
- [x] brainstorm game state logic
- [x] finish game state logic
- [x] work on logic for scoring system(?)
- [x] use svelte stores to store state (https://svelte.dev/tutorial/writable-stores)
- [x] add new camera poistion props to store later
- [x] fix styling issues
- [x] add camera pos props and store
- [x] zooming capabilities
- [x] animation to camera target
- [x] add links to my socials
- [x] update models and add new ones
- [x] rethink geo
- [x] netlify adapter/package and config for deploying

### in progress
- [ ] Optimize performance for older iPhones (6/7)
    - instancing of geometry?
- [ ] Fix directional lighting shadows
    - https://github.com/threlte/threlte/issues/201
    - frustrum size?
    - shadow-camera?

## setup project

```bash
# install node_modules
npm install
# run dev server
npm run dev

# build production version
npm run build
```

> make sure the correct [adapter](https://kit.svelte.dev/docs/adapters) is set up! (Netlify/Vercel/etc)