import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './Styles/App.css';
import About from './pages/About';
import Posts from './pages/Posts';
import ErrorPage from './pages/ErrorPage';

export default function App() {
  return (
    <BrowserRouter>
      <>
        <header>
          <nav className="nav">
            <NavLink to="/">Posts</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}
