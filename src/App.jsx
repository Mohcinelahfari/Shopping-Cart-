import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Store from './components/pages/Store'
import About from './components/pages/About'
import NavbarComp from './components/Chaire/NavbarComp'
import ShoppingProvider from './components/context/ShoppingContext'

function App() {
  return (
    <>
    <ShoppingProvider>
    <NavbarComp />
      <Container className='mb-4'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Container>
    </ShoppingProvider>

    </>
  )
}

export default App