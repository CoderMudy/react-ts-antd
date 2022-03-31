import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Example from './Example';
import Buses from './component/core/Buses';
import "antd/dist/antd.css"
import Rules from './component/core/Rules';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './Routes';
import store from './store/index';
import { history } from './store';

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     {/* <Example /> */}
//     {/* <Buses/> */}
//     <SchemaEditor />,
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
