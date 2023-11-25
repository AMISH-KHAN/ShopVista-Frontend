import React from 'react'// provde elements 
import ReactDOM from 'react-dom/client'//virtual dom
import App from './App.jsx'
import { Provider } from 'react-redux'
import  Store  from './Store/Store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />

    </Provider>
  </React.StrictMode>,
)
