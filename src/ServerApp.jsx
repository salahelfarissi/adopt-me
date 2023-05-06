// renderToPipeableStream allows us to render our app to a stream of HTML, chunk by chunk
import { renderToPipeableStream } from 'react-dom/server';
// StaticRouter is basically the same as BrowserRouter, but it runs in Node
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export default function render(url, opts) {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    opts,
  );
  return stream;
}
