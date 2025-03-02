import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FreeBook from '../components/FreeBook'

function Home() {
  return (
    <div>
       <Navbar/>
       <Banner/>
       <FreeBook/>
       <Footer/>
    </div>
  )
}

export default Home