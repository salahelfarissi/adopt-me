import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/" element={<SearchParams />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
