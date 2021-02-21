import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
  uri: "http://localhost:3091/api/",
  headers: {
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.",
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

export { client };
