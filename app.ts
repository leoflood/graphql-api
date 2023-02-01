import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

import RandomDie from "./random-die";

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }

  type Query {
    quoteOfTheDay: String
    random: Float!
    getDie(numSides: Int): RandomDie
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? "Take it easy" : "Salvation lies within";
  },
  random: () => {
    return Math.random();
  },
  getDie: ({numSides = 6}) => {
    return new RandomDie(numSides);
  }
};

const PORT = 4000;

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(PORT);

console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
