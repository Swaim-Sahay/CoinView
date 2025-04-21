import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Features from './pages/Features/Features'; // ✅ correct import
import Footer from './components/footer/Footer';
import Pricing from './pages/Pricing/Pricing';
import Blog from './pages/Blog/Blog';
import Signup from './pages/Signup/Signup';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin />} />
        <Route path='/features' element={<Features />} />
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
