import React from 'react'
import Navbar from './Components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Cart from './Pages/Cart'
import Blogs from './Pages/Blogs'
import Features from './Pages/Features'

const App = () => {
  return (
    <div className='w-full h-full'>

        <Navbar></Navbar>
        <div>
              <Routes>
                <Route className path='/' element={<Home></Home>}> </Route>
                <Route className path='/about' element={<About></About>} ></Route>
                <Route className path='/services' element={<Services></Services>} ></Route>
                <Route className path='/blogs' element={<Blogs></Blogs>} ></Route>
                <Route className path='/features' element={<Features></Features>} ></Route>
                <Route className path='/cart' element={<Cart></Cart>} ></Route>
              </Routes>
        </div>

    </div>

  )
}

export default App