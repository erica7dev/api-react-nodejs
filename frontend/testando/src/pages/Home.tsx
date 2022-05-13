
import { useState } from 'react'
import Header from '../components/Header'
import {Link} from 'react-router-dom';

export default function Home() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count+1)
  }

  return (
    <div className="App">
      <h2>Hello,World</h2>
      <Header title={'teste'} />
      <input
        type="button"
        value="Click"
        onClick={increment}
      />
      <p>{count} cliques!</p>
      JavaScript
      <Link to="/cadastro">Acessar cadastro</Link>
    </div>
  )
}
