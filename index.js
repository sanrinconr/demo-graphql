const app = require('./src/app');

let server;
  server = app.listen(process.env.PORT || 3001, () => {
    console.log(`Listening to port ${3001}`);
});