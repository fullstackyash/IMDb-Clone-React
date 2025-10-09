import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Banner from './Banner'
import MovieList from './MovieList'
import Watchlist from './Watchlist'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<div> <Header/> <Banner/> <MovieList/></div>} />
          <Route path="/watchlist" element={<div> <Header/> <Watchlist/> </div>} />
       </Routes>
      </BrowserRouter>
  )
}

export default App
