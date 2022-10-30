import React from 'react'
import ReactDOM from 'react-dom'
import Info from './components/info'
import AboutSection from './components/About'
import Interest from './components/Interests'
import Footer from './components/Footer'

export default function App() {
    return (
        <div>
            <Info />
            <AboutSection />       
            <Interest />
            <Footer />
        </div>
    )
}