
import './App.css';
import Footer from './components/Footer';
import HomePage1 from './components/HomePage/HomePage1';
import HomePage2 from './components/HomePage/HomePage2';
import HomePage3 from './components/HomePage/HomePage3';
import { Route, Routes } from 'react-router-dom';

import Nabvar from './components/Navbar';
import ProductsPage4 from './components/ProductsPage/ProductsPage4';

function App() {
  return (
    <div className="App">
      <Nabvar />
      <Routes>
        <Route path="/" element={<div><HomePage1 /><HomePage2 /><HomePage3 /></div>}></Route>
        <Route path="/allproducts" element={<ProductsPage4 />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
