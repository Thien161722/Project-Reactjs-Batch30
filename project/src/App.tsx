import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/global.css'

import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route index element = {<HomePage/>}/>
          <Route path='blog' element = {<BlogPage/>}/>
          <Route path='category' element = {<CategoryPage/>}/>
          <Route path='product' element = {<ProductPage/>}/>
          <Route path='login' element = {<LoginPage/>}/>
          <Route path='*' element = {<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
