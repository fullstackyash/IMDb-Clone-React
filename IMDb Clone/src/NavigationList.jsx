import React from 'react'

function NavigationList() {
  return (
    <div className='content-center gap-10'>
        <a className='ml-10 font-bold hover:text-blue-500' href='/'>Home</a>
        <a className='ml-10 font-bold hover:text-blue-500' href='/movies'>Movies</a>
    </div>
  )
}

export default NavigationList