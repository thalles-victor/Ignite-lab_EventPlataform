import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4om0ykf0e9301xt4dgvbqet/master",
  cache: new InMemoryCache(),
});
