import React from 'react';
import { Nav } from '../../components/Nav/Nav';
import {Hero} from '../../components/Hero/Hero' ; 
import { Advanced } from '../../components/Advanced/Advanced';
import {Boost} from '../../components/Boost/Boost' 
import { Footer } from '../../components/Footer/Footer';
import './App.scss';

class  App extends React.Component  { 
  render (){

    return (
      <main className="App"> 
      <Nav /> 
      <Hero /> 
      <Advanced /> 
      <Boost />  
      <Footer /> 
      </main>
    );
  }
  } 

export default App;
