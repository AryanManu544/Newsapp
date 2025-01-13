import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

export default class App extends Component{
  render(){
    let c= "john"
    return(
      <div>
        Hello my first class based component {c}
      </div>
    )
  }
}