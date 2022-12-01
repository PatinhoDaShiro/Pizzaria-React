import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navegacao from './components/templates/nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Navegacao/>
    <App />
  </React.StrictMode>
)
