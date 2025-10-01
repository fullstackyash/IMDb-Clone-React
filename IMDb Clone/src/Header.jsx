import React from 'react'
import Logo from './Logo'
import NavigationList from './NavigationList'

function Header() {
  return (
    <div className='flex m-5 gap-10'>
        <Logo/>
        <NavigationList/>
    </div>
  )
}

export default Header