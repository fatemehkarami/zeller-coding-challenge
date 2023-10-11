import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import awsExports from "./aws-exports";

// Create an Apollo Client with an HTTP link that includes the API key in the headers.
const httpLink = createHttpLink({
  uri: awsExports.aws_appsync_graphqlEndpoint,
});

const authLink = setContext((_, { headers }) => {
  // Include the API key in the headers.
  const apiKey = awsExports.aws_appsync_apiKey;
  return {
    headers: {
      ...headers,
      "x-api-key": apiKey,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

reportWebVitals();
