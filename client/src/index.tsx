import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux';
import App from './App';
import GlobalStyle from './GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
