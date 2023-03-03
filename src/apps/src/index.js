import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';

const client = new ApolloClient({
  uri:'https://graphql.contentful.com/content/v1/spaces/ffrhttfighww?access_token=BZz6LDz-PeMhqiWhd9zElh1lKz-TxZC5Gdk-oB1JdOA',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={configureStore({})}>
        <App />
      </Provider>
    </ApolloProvider>,
  </React.StrictMode>
);

reportWebVitals();
