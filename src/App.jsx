import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import Pet from './Pet';

const App = () => {
  return createElement('div', {}, [
    createElement('h1', {}, 'Adopt me!'),
    createElement(Pet, {
      animal: 'Dog',
      name: 'Luna',
      breed: 'Havanese',
    }),
    createElement(Pet, {
      animal: 'Bird',
      name: 'Pepper',
      breed: 'Cockateil',
    }),
    createElement(Pet, {
      animal: 'Cat',
      name: 'Doink',
      breed: 'Mix',
    }),
  ]);
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(createElement(App));
