import React from 'react';
import { Nav } from '../../components/Nav/Nav';
import {Hero} from '../../components/Hero/Hero' 
import {Boost} from '../../components/Boost/Boost' 
import { Footer } from '../../components/Footer/Footer';
import './App.scss';

class  App extends React.Component  { 
  render (){

    return (
      <main className="App"> 
      <Nav /> 
      <Hero /> 
      <Boost />  
      <Footer /> 
      </main>
    );
  }
  } 

export default App;
