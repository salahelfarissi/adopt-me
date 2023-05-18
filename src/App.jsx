import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './store';
import { createRoot } from 'react-dom/client';

const SearchParams = lazy(() => import('./components/SearchParams'));
const Details = lazy(() => import('./components/Details'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={
          <div className="loading-pane">
            <h2 className="loader">🐶</h2>
          </div>
        }
      >
        <BrowserRouter>
          <Provider store={store}>
            <header>
              <Link to="/">Adopt me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />}></Route>
              <Route path="/" element={<SearchParams />}></Route>
            </Routes>
          </Provider>
        </BrowserRouter>
      </Suspense>
    </QueryClientProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
