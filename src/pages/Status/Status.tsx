import { PaperPlaneRight } from 'phosphor-react';
import { FormEvent, KeyboardEvent, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Separator } from '../../components/Separator/Separator';
import { Tweet } from '../../components/Tweet/Tweet';
import './Status.css';



export function Status() {
  // estado: variáveis que o React monitora
  const [newAnswer, setNewAnswer] = useState('');
  const [answer, setAnswer] = useState([
    'Parabéns!!',
  ]);

  // SPA - Single Page Application => quero evitar redirecionamentos
  // O React ele não fica monitorando o componente para ver se houve alguma mudança
  // No React nós não alteramos nossas informações, nós "CRIAMOS" uma nova versão dessas informações - IMUTABILIDADE
  function handleCreateNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswer(state => [...state, newAnswer]);
    setNewAnswer('');
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      // submit
      setAnswer(state => [...state, newAnswer]);
      setNewAnswer('');
    }
  }

  return (
    <main className='status'>
      <Header title='Tweet' />

      <Tweet content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Inventore vero at, maiores aspernatur sint possimus labore eaque magni hic, 
      modi omnis et quo porro numquam architecto nostrum ullam est tempore.' 
      />

      <Separator />

      <form onSubmit={handleCreateNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/lucasfelipedonascimento.png" alt="Lucas Felipe" />
          <textarea 
            id='tweet' 
            placeholder="Tweet your answer" 
            onKeyDown={handleHotKeySubmit}
            onChange={event => setNewAnswer(event.target.value)}
            value={newAnswer}
          />
        </label>

        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answer && answer.map((answer, index) => {
        return <Tweet key={index} content={answer} />
      })}
    </main>
  )
}