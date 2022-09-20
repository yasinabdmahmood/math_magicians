import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </>

    );
  }
}

export default App;
