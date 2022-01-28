import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
// import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

// import Index from './page/index.jsx';

const app = new Application();
const router = new Router();

app.use(async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/static`,
    index: "index.html",
  });
});

app.use(router.allowedMethods());

app.addEventListener(
  "listen",
  (e) => console.log("Listening on http://localhost:8080"),
);

await app.listen({ port: 8080 });