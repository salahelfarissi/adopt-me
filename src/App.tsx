import { useState, lazy, Suspense } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const SearchParams = lazy(() => import('./components/SearchParams'));
const Details = lazy(() => import('./components/Details'));

import AdoptedPetContext from './AdoptedPetContext';
import { Pet } from './components/APIResponsesTypes';
import { createRoot } from 'react-dom/client';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null as Pet | null);
  return (
    <AdoptedPetContext.Provider value={adoptedPet}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense
            fallback={
              <div className="loading-pane">
                <h2 className="loader">🐶</h2>
              </div>
            }
          >
            <header>
              <Link to="/">Adopt me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />}></Route>
              <Route path="/" element={<SearchParams />}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </AdoptedPetContext.Provider>
  );
};

const container = document.getElementById('root');

if (!container) {
  throw new Error('No container element found');
}

const root = createRoot(container);
root.render(<App />);
