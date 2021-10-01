import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';

const Home = () => {
  return (
    <div className='container'>
      <CategoryMenu />
      <ProductList />
    </div>
  );
};

// some type of comment
export default Home;
