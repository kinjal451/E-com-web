import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './cart/Home';
import OrderList from './cart/OrderList';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/order" element={ <OrderList/> } />
       
      </Routes>
    </div>
  )
}

export default App