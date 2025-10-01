import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Banner from './Banner'
import MovieList from './MovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
       <Header/>
       <Banner/>
       <MovieList/>
      </div>
  )
}

export default App
