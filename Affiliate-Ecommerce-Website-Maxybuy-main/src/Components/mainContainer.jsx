import React from 'react'
import './mainContainer.css'

const MainContainer = ({children}) => {
  return (
    <main className='main-container'>{children}</main>
  )
}

export default MainContainer