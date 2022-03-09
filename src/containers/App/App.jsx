import React from 'react';
import { Nav } from '../../components/Nav/Nav';
import {Hero} from '../../components/Hero/Hero' ; 
import { Advanced } from '../../components/Advanced/Advanced';
import {Boost} from '../../components/Boost/Boost' 
import { Footer } from '../../components/Footer/Footer';
import './App.scss';
import axios from 'axios';

class  App extends React.Component  { 
  state = { 
    nav : { 
      widthForMobileDevice : false , 
      showMobileNav : false 
    }, 
    shortenURL : { 
      value : "" , 
      shortened : [
        {  
          mainURL : 'http://https%3A%2F%2Fwww.geeksforgeeks.org%2F' ,
          shortenedURL : 'https://rel.link/kkkdkdk' , 
          statusText : 'Copied' , 
          id: '2334' },
 /*
          {  mainURL : 'http://localhost:3000/url-shortener' ,
          shortenedURL : 'https://rel.link/kkkdkdk' , 
          statusText : 'Copied' , 
          id: '2334' },

          {  mainURL : 'http://localhost:3000/url-shortener' ,
          shortenedURL : 'https://rel.link/kkkdkdk' , 
          statusText : 'Copied' , 
          id: '2334' }, */
        
      ] 
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

  shortenInputChange = (event)=> { 
    this.setState(prevState => ({
      ...prevState, 
      shortenURL : { 
        ...this.state.shortenURL , 
        value : event.target.value.trim()
      }
    }))
  }

  shortenURL = ()=> { 
    const url  = encodeURIComponent(this.state.shortenURL.value) 
   
    axios({
    metod :'get' , 
    url : 'https://api.shrtco.de/v2/shorten' , 
    params : {url : url}  ,  

    
    }).then (response => response.data.result) 
      .then (data => {
          this.setState (prevState => { 
             return { 
               ...prevState , 
                shortenURL : { 
                  value : '' , 
                  shortened : prevState.shortenURL.shortened.concat({ 
                    mainURL : data.original_link , 
                    shortenedURL :data.full_short_link3 , 
                    statusText : "Copy",  
                    id : data.code
                  })
                }
             }
          })
        console.log(data)}  ) 
    .catch(e => {throw new Error("Couldn't get data, try again")})
     

  }
  render (){
    return (
      <main className="App"> 
      <Nav isMobileDevice={this.state.nav.widthForMobileDevice} showMobileNav={this.state.nav.showMobileNav} toggleMobileNav={this.toggleMobileNav}/> 
      <Hero /> 
      <Advanced clickShortenBtn={this.shortenURL} shortenedURL={this.state.shortenURL.shortened} shortenInputValue={this.state.shortenURL.value} handleInputChange={this.shortenInputChange}/> 
      <Boost />  
      <Footer /> 
      </main>
    );
  }
  } 

export default App;
