import React from 'react';
import App from './app/App';
import ApolloClient from 'apollo-client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { setContext } from 'apollo-link-context';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [],
    },
  },
});

const uploadLink = createUploadLink({
  uri: process.env.REACT_APP_SERVER_URL,
});

const authLink = setContext(() => {
  const token = localStorage.getItem('x-token');
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache({ fragmentMatcher }),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
