import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root');

if (!container) {
  throw new Error('No container element found');
}

hydrateRoot(
  container,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
