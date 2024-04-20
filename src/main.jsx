import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import Router from '../Routes/Route.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={ Router } />
    </Provider>

  </React.StrictMode>
)
