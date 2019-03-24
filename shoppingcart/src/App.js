import React , {Component} from 'react';

import {createBrowserHistory} from 'history'


import './App.css';
import RoutingHolder from './Containers/RoutingHolder';
import Header from './Containers/Header/Header';
import Footer from './Containers/Footer/Footer';

const history = createBrowserHistory();

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
            isLoggedIn:false
    }
}


componentDidMount(){

  history.listen( (data, action) => {
    console.log('path changed data=', data);
    console.log('path changed action=', action);
  })
}

render(){

  return ( <div className='root'>
           <Header history={history}/> 

            <RoutingHolder isLoggedIn={this.state.isLoggedIn} history={history}/>
          
            <Footer />          
          
          </div>);
          
}
}

export default App ;