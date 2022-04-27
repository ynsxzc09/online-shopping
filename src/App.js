import Home from '../src/Components/Home';
import Navigation from '../src/Components/Navigation';
import Product from './Components/Products/Product';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import SingleItem from './Components/Products/SingleItem';

function App() {
  return (
   <Router>
     <Navigation />
     <Routes>
       <Route exact path="/" element={<Home/>} />
       <Route path ="/products" element={<Product/>} />
       <Route path="/products/:id" element={<SingleItem/>} />
     </Routes>
   </Router>
  );
}

export default App;
