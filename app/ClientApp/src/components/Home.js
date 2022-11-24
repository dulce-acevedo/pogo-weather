import React, { Component } from 'react';
import '../style/home.css';
import background from '../images/background1.png';
import logo from '../images/logo.png';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className='h-full justify-center items-center bg-white'> 
        <div className='inset-0 flex justify-center items-center h-5/6 relative z-0' style={{backgroundImage: `linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,1,1,1))`}}>
          <img src={background}/>
          <div className='absolute inset-0 flex flex-col justify-center items-center z-10 h-full' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(50,50,50,50))`}}>
            <div className='w-3/5'>
              <div className='flex flex-row justify-center items-center relative z-0'>
                <img src={logo} alt="logo" className="w-80" />
                <h1 className="text-8xl text-center	font-bold text-white text-shadow-8xl justify-self-center grow">PoGoWeather</h1>
                
              </div>
              
              <div className='text-3xl text-center	'>
              Plan when this week your favourite pokemon will have weather boost and will be more likely to appear
              </div>
            </div>
          </div>
        </div>
        <div className='h-5/6'>
          uwu
        </div>
      </div>
      
    );
  }
}
