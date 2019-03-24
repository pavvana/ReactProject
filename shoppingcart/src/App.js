import React , {Component} from 'react';
import {createBrowserHistory} from 'history';
import Fronpage from './Containers/Fronpage';
import './App.css';
//
import Header from './Containers/Header/Header';
import Footer from './Containers/Footer/Footer';
import RoutingHolder from './Containers/RoutingHolder';

const history = createBrowserHistory();

class App extends Component {

render(){
  const maxNoofitem= 2;

  return ( <div className='root'>
           <Header history={history} /> 

            <RoutingHolder history={history} count={maxNoofitem}/>

            <Footer />          
          
          </div>);
          
}
}

export default App ;