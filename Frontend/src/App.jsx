import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { PlaceOrder } from './pages/PlaceOrder'
import { Footer } from './components/Footer'
import { Login } from './components/Login'
// import { AppDownload } from './components/AppDownload'

function App() {
  const [showlogin,setshowlogin] =useState(false);
  return (
    <>
    {showlogin? <Login setshowlogin={setshowlogin} showlogin={showlogin}/>: <></>}
    <div className='app'>
      <Navbar setshowlogin={setshowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
      </Routes>
    </div>

    <Footer/>
    </>
  )
}

export default App
