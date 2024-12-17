import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import "./index.css"

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-py5p4ujtcxmq5aik.us.auth0.com"
    clientId="Vb5Nx5hCgLvTNEEOGhWRz2bES00Bs50W"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);