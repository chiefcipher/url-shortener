import React from 'react';
import { Nav } from '../../components/Nav/Nav';
import {Hero} from '../../components/Hero/Hero'
import './App.scss';

class  App extends React.Component  { 
  render (){

    return (
      <main className="App"> 
      <Nav /> 
      <Hero /> 
        
      </main>
    );
  }
  } 

export default App;
