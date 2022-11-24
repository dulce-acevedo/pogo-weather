import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../style/home.css';

export class NavMenu extends Component {

  render() {
    return (
      <div className="navbar bg-primary px-14">
        <div className="flex-1">
        <div className="btn btn-ghost h-auto">
          <img src={logo} alt="logo" className="w-20" />
          <button className="normal-case text-3xl  text-white px-2 text-shadow-4xl">PoGoWeather</button>
        </div>
        </div>
        
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0 font-bold">
      <li><a>Home</a></li>
      <li>
        <a>
          Option
        </a>
      </li>
      <li><a>Option</a></li>
    </ul>
  </div>
</div>
      
    );
  }
}
