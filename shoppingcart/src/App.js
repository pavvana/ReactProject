import React , {Component} from 'react';

import './App.css';
import Productlist from './Containers/Productlist';
import Header from './Containers/Header/Header';
import Footer from './Containers/Footer/Footer';

class App extends Component {

render(){

  return ( <div className='root'>
           <Header /> 

            <Productlist />
          
            <Footer />          
          
          </div>);
          
}
}

export default App ;