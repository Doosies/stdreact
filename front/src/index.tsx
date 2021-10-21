import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

// import App from './TodoList/App';
// import App from './Redux/ App'
// import App from './HomePage/App';
import App from './Router/App'
import reportWebVitals from './reportWebVitals';
// import './Redux/exercise'
import {createStore} from 'redux';
// import rootReducer from './Redux/modules';
import rootReducer from './HomePage/modules'
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
