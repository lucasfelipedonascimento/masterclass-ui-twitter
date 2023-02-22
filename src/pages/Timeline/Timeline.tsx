import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../../components/Header/Header"
import { Separator } from "../../components/Separator/Separator"
import { Tweet } from "../../components/Tweet/Tweet"
import './Timeline.css'

export function Timeline() {
  // estado: variáveis que o React monitora
  const [newTweet, setNewTweet] = useState('');
  const [tweets, setTweets] = useState([
    'Meu primeiro site',
  ]);

  // SPA - Single Page Application => quero evitar redirecionamentos
  // O React ele não fica monitorando o componente para ver se houve alguma mudança
  // No React nós não alteramos nossas informações, nós "CRIAMOS" uma nova versão dessas informações - IMUTABILIDADE
  function handleCreateNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweets(state => [...state, newTweet])
    setNewTweet('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      // submit
      setTweets(state => [...state, newTweet])
      setNewTweet('')
    }
  }

  return (
    <main className='timeline'>
      <Header title='Home' />

      <form onSubmit={handleCreateNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/lucasfelipedonascimento.png" alt="Lucas Felipe" />
          <textarea 
            id='tweet' 
            placeholder="What's happening?" 
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={event => { 
              setNewTweet(event.target.value);
            }}
          />
        </label>

        <button type='submit'>Tweet</button>
      </form>

      <Separator />

      {tweets && tweets.map((tweet, index) => {
        return <Tweet key={index} content={tweet} />
      })}
    </main>
  )
}