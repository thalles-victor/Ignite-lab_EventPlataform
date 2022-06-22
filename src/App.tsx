import { ApolloProvider } from '@apollo/client';
import { Event } from './components/Pages/Event';
import { Router } from './components/Router';
import { client } from './lib/apollo';
export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}