import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './index.css'
import {ApolloClient,InMemoryCache,ApolloProvider,useQuery,gql} from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });

ReactDom.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
    , document.querySelector("#root"))