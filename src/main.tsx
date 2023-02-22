import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { router } from './Routes';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Quanto usamos o "RouterProvider", quer dizer que estou dando acesso a  
        todas as funcionalidades do React Router Dom para todos os elementos que estiverem
        dentro do meu "RouterProvider" */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
