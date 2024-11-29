import React from 'react'

import Header from './components/header'
import About from './components/About'
import Project from './components/Project'
import Testimonails from './components/Testimonails'
import Contact from './components/Contact'
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'



const App = () => {
  return (
    <div>
    <ToastContainer/>
    <Header/>
    <About/>
    <Project/>
    <Testimonails/>
    <Contact/>
    <Footer/>
 

    </div>
  
  )
}

export default App
