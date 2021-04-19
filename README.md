# `query` in `exportPathMap` crashes `next export`

```bash
$ yarn install;
$ yarn build;
$ yarn export;
Error occurred prerendering page "/". Read more: https://nextjs.org/docs/messages/prerender-error
Error:
Error: you provided query values for / which is an auto-exported page. These can not be applied since the page can no longer be re-rendered on the server. To disable auto-export for this page add `getInitialProps`
```

`useRouter().query` is also empty.

`getInitialProps` is no solution since we want to use `getStaticProps`.
