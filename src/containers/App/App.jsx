import React from 'react';
import { Nav } from '../../components/Nav/Nav';
import {Hero} from '../../components/Hero/Hero' ; 
import { Advanced } from '../../components/Advanced/Advanced';
import {Boost} from '../../components/Boost/Boost' 
import { Footer } from '../../components/Footer/Footer';
import './App.scss';

class  App extends React.Component  { 
  state = { 
    nav : { 
      widthForMobileDevice : false , 
      showMobileNav : false 
    }
  }
  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize' ,this.handleResize)
     
     
  }
  handleResize = ()=> { 
    const isForMobile = window.innerWidth < 750 ? true : false 
    
      this.setState({
        nav : { 
          ...this.state.nav , 
          widthForMobileDevice : isForMobile
        }
      })
  }
  shouldComponentUpdate(nextProps , nextState) { 
    console.log(['nextstate'] , nextState)
    return true 
  }

  toggleMobileNav = ()=> { 
    this.setState(prevState => { 
      return { 
        nav :  { 
          ...this.state.nav , 
          showMobileNav : !prevState.nav.showMobileNav 
        }
      }
    })
  }
  render (){
    return (
      <main className="App"> 
      <Nav isMobileDevice={this.state.nav.widthForMobileDevice} showMobileNav={this.state.nav.showMobileNav} toggleMobileNav={this.toggleMobileNav}/> 
      <Hero /> 
      <Advanced /> 
      <Boost />  
      <Footer /> 
      </main>
    );
  }
  } 

export default App;
