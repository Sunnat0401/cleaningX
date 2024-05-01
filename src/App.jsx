import './App.css'
import About from './Pages/About/About'
import Articles from './Pages/Articles/Articles'
import Contact from './Pages/Contact/Contact'
import Footer from './Pages/Footer/Footer'
import HomePages from './Pages/HomePages/HomePages'
import Services from './Pages/Services/Services'
import Treatment from './Pages/Treatment/Treatment'
import React from "react";
import { createRoot } from 'react-dom/client';
function App() {
  return (
    <>
       <HomePages/>
       <About/>
       <Services/>
       <Treatment/>
       <Articles/>
       <Contact/>
       <Footer/>
    </>
  )
}

export default App
