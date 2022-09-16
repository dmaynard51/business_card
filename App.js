import React from 'react'
import Info from './componants/Info'
import About from './componants/About'
import Interests from './componants/Interests'
import Footer from './componants/Footer'

export default function App() {
    return (
        <div className='main--div'>
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}