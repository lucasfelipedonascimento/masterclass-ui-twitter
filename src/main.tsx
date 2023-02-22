import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { router } from './Routes';
import { RouterProvider } from 'react-router-dom';

// renderizar => mostrar em tela

// programação imperativa: precisamos ditar pro código exatamente o que precisa ser feito
// programação declarativa: escrevemos códigos menores e "diretos"

// Componentes: Pequenas partes de interfaces reutilizáveis

// Typescript: Ferramenta de tipagem estática para JavaScript
// Tipagem estática: Mecanismo para evitar erros ENQUANTO estamos desenvolvendo o nosso app

// forEach: não tem retorno
// map: sempre retorna um valor
// key: chave "unique", que deve ser passada para o react saber exatamente qual elemento da lista 
// que estou interando ou "mexendo"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Quanto usamos o "RouterProvider", quer dizer que estou dando acesso a  
        todas as funcionalidades do React Router Dom para todos os elementos que estiverem
        dentro do meu "RouterProvider" */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
