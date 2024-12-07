# Live Deploy
[Espresso Emporium](https://espresso-emporium-crud-754df.web.app)

![Espresso Emporium Application](./coffee.PNG)

# API
```
https://espresso-emporium-server-pi-seven.vercel.app/
```

# Client Server Technology
[React Router](https://reactrouter.com/6.28.0/start/tutorial#tutorial)<br />
[TailwindCSS + Vite](https://tailwindcss.com/docs/guides/vite)<bt />
[Prop Types](https://www.npmjs.com/package/prop-types)<br />
[React Helmet Async](https://www.npmjs.com/package/react-helmet-async)<br />
[React Toastify](https://www.npmjs.com/package/react-toastify)<br />
[Sweet Alert 2](https://sweetalert2.github.io/)<br />

# Server Side Technology
[ExpressJS](https://expressjs.com/en/starter/installing.html)<br />
[Middleware CORS](https://expressjs.com/en/resources/middleware/cors.html)<br />
[Nodemon](https://www.npmjs.com/package/nodemon)<br />
[Dotenv](https://www.npmjs.com/package/dotenv)<br />
[MongoDB](https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/)<br />

## Env Variables and Modes
__.env # loaded in all cases__<br />
__.env.local   # loaded in all cases, ignored by git__<br />

```
[.env.local/.env]
Example:
VITE_SOME_KEY=123
DB_PASSWORD=foobar
```

```
[.js/.jsx/.tsx]
console.log(import.meta.env.VITE_SOME_KEY) // "123"
console.log(process.env.DB_PASSWORD) // foobar
```