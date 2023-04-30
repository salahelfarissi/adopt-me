import { createRoot } from 'react-dom/client';
import SearchParams from './SearchParams';
import { StrictMode } from 'react';

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
