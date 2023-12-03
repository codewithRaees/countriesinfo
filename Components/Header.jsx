import React from 'react'
import { useTheme } from '../hooks/useTheme'

const Header = ({}) => {
  const[isdark , setisdark]= useTheme()
 
  return (
    <>
       <header className={`header-container ${isdark? 'dark':''}`}>
      <div className="header-content">
        <h2 className="title"><a href="/">Where in the world?</a></h2>
        <p className="theme-changer" onClick={()=>{
          //  document.body.classList.toggle('dark')
           setisdark(!isdark)
           localStorage.setItem('LightDarkMode', !isdark)
           
           } }>
          <i className={`fa-regular fa-${isdark?'moon':'sun'}`}></i>&nbsp;&nbsp;
          {isdark? 'Light':'Dark'} Mode</p>
      </div>
      

    </header>
    </>
  )
}

export default Header
