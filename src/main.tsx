import React, { Profiler } from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet';
import './global.css';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

// renderizar => mostrar em tela

// programação imperativa: precisamos ditar pro código exatamente o que precisa ser feito
// programação declarativa: escrevemos códigos menores e "diretos"

// Componentes: Pequenas partes de interfaces reutilizáveis

// Typescript: Ferramenta de tipagem estática para JavaScript
// Tipagem estática: Mecanismo para evitar erros ENQUANTO estamos desenvolvendo o nosso app

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <Sidebar />
      
      <div className="content">
        <main className='timeline'>
          <Header title='Home' />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/lucasfelipedonascimento.png" alt="Lucas Felipe" />
              <textarea id='tweet' placeholder="What's happening?" />
            </label>

            <button type='submit'>Tweet</button>
          </form>

          <div className="separator" />

          <Tweet />
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
