import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/Store';
import App from './App';
import { Link } from 'react-router-dom';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';
import Shape from './components/Shape';
import { Button } from 'antd';
import Index from './pages/infomation';

import Tabs from './components/Tabs';



export default function index() {
  return (
    <div>index</div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
      <React.StrictMode>
        <App />
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
<Tabs/>
    {/* <Shape/> */}

  </Provider>,
  document.getElementById('root')
);