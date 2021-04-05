const express = require('express');
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors');
const schema = require('./graphql/schema')


const app = express();
app.use(cors());
// app.use('/', routes);
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: false,
  }))
app.use('/t', graphqlHTTP({
schema: schema,
graphiql: true,
}))


module.exports = app;
