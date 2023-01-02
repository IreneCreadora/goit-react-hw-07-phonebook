import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from 'components/App';
import { store } from './redux/store';
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>
);
