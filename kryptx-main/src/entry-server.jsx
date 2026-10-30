import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Used at build time to pre-render the home page into static HTML for search engines.
export const render = () => renderToString(<App />)
