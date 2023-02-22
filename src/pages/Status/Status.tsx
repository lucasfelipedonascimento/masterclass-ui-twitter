import { Header } from '../../components/Header/Header';
import { Separator } from '../../components/Separator/Separator';
import { Tweet } from '../../components/Tweet/Tweet';
import './Status.css';

const answer = [
  {
    id: 1,
    content: 'Parabéns!!!'
  }
]

export function Status() {
  return (
    <main className='status'>
      <Header title='Tweet' />

      <Tweet content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Inventore vero at, maiores aspernatur sint possimus labore eaque magni hic, 
      modi omnis et quo porro numquam architecto nostrum ullam est tempore.' 
      />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/lucasfelipedonascimento.png" alt="Lucas Felipe" />
          <textarea id='tweet' placeholder="Tweet your answer" />
        </label>

        <button type='submit'>Answer</button>
      </form>

      {answer && answer.map(answer => {
        return <Tweet key={answer.id} content={answer.content} />
      })}
    </main>
  )
}