import React from 'react';
import logo from './logo.svg';
import { GlobalStyle } from './styles/global';
import Header from './components/Header'
import Dashboard from './components/Dashoboard';



function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      

     <GlobalStyle/>
    </>
  );
}

export default App;
