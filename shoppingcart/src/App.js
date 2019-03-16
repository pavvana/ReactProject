import React , {Component} from 'react';

import './App.css';
import Productlist from './Productlist';

class App extends Component {

  
/*
componentWillMount(){
  let temp =`App  componentWillMount: it should not be used usually because it has some
   open issues because before mounting it will call update flow`;
  console.log( temp);
}
componentDidMount(){

  console.log('App componentDidMount :it should be used for api callings');

}

shouldComponentUpdate(){
console.log('App shouldComponentUpdate: it should get boolen return and it will define whether the component should get update or not')
}

componentWillUpdate(){
console.log('it is unsafe + it should have a condition if else ');

}
componentDidUpdate(){
  console.log('it is unsafe + it should have a condition if else ');
}

componentWillUnmount(){

  console.log('connection closer , events and all resources must be released');
}*/

render(){

  return ( <div className='root'>
          <div className={'cls-1'}>
          <div className='cls-2'> 
           
          <p className='cls-11'>Flipkart</p>
          <input  className='cls-12' type="text" name="t1" placeholder="Search for Products, brands and  more" />   
          
          <a href="www.google.com">Login</a>
          <p>/</p>
          <a href="www.google.com">Signup</a>
          
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlz8lzPKDvLHC_xlou9dXw2S9e0x05ZgER8FDEK9IeUjx05QQm" alt="Cart" height="20" width="20"></img>
          
          </div>
          </div>
          <div>
            <Productlist />
            </div>
          <div className={'cls-3'}>
          <footer>
          
          <p>Contact information: <a href="mailto:someone@example.com">someone@example.com</a>.</p>
          </footer>
          </div>
          
          </div>);
          
}
}

export default App ;