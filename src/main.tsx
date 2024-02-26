import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
    <ToastContainer
      position='bottom-left'
      autoClose={2000}
    />
  </Provider>
);
