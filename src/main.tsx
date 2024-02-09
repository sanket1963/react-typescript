import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { TodosProvider } from './store/todo.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodosProvider>
    <App />
    </TodosProvider>
  </React.StrictMode>,
)
