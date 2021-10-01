import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';
import Cart from '../components/Cart';

const Home = () => {
  return (
    <div className='container'>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

// some type of comment
export default Home;
