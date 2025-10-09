import React from 'react'
import { Link } from 'react-router-dom'

function NavigationList() {
  return (
    <div className='content-center gap-10'>
        <Link className='ml-10 font-bold hover:text-blue-500' to='/'>Movies</Link>
        <Link className='ml-10 font-bold hover:text-blue-500' to='/watchlist'>Watchlist</Link>
    </div>
  )
}

export default NavigationList