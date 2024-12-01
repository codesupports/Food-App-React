import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Categoery from './components/Categoery'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Header />
      <div className='container m-auto font-sans'>
        <Categoery />
        <main>
          <div className='flex flex-wrap pb-8'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>

      </div>
      <Footer />
    </>
  )
}

export default App
