import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
    return (
        <div className="antialiased text-gray-800">
            <Header/>
            <Hero/>
            <Features/>
            <Footer/>
        </div>
    );
}

export default App;
