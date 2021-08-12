# i18n-fe-server



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


> use i18n-fe
switched to db i18n-fe
>
> db.createUser(
...   {
...     user: "suibu",
...     pwd: "123456",
...     roles: [ { role: "dbAdmin", db: "i18n-fe" } ]
...   }
... )