import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import { ThemeProvider } from './contexts/ThemeContext'



const App = () => {
    return (  
    <ThemeProvider >
    <Header/>
    <Outlet />
    </ThemeProvider>
    
  )
}

export default App
