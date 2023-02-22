import { Header } from "../../components/Header/Header"
import { Separator } from "../../components/Separator/Separator"
import { Tweet } from "../../components/Tweet/Tweet"
import './Timeline.css'

const tweets = [
  { id: 1 ,content: 'Meu primeiro site'},
]

export function Timeline() {
  return (
    <main className='timeline'>
      <Header title='Home' />

      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/lucasfelipedonascimento.png" alt="Lucas Felipe" />
          <textarea id='tweet' placeholder="What's happening?" />
        </label>

        <button type='submit'>Tweet</button>
      </form>

      <Separator />

      {tweets && tweets.map(tweet => {
        return <Tweet key={tweet.id} content={tweet.content} />
      })}
    </main>
  )
}