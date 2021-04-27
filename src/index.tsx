import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './shared/styles/root.scss';
import App from './groups/App';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);