import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    /**
     * Auth0Provider is a component that has a hook that provides
     * all authentication operations
     *
     * TODO: replace the empty strings below with your own domain, clientId, and audience
     */
    <Auth0Provider
      domain="tohora-2023-ahmad.au.auth0.com"
      clientId="TLevTajf7v6ARmCcYUXHeA5gMdaG0xnm"
      redirectUri={window.location.origin}
      audience="https://fruits/api"
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  )
})
