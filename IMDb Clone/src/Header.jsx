import React from 'react'
import Logo from './Logo'
import NavigationList from './NavigationList'

function Header() {
  return (
    <div className='flex p-4 gap-5 border-b-2'>
        <Logo/>
        <NavigationList/>
    </div>
  )
}

export default Header