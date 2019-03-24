import React , {Component} from 'react';
import { Router, Route,Switch } from 'react-router-dom';

import Productlist from './Productlist';
import Login from './Login';


class RoutingHolder extends Component {


  getLoggedInRouting = () => {
  return(
  <Router history={this.props.history}>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/products' component={(props) =><Productlist {...props} history={this.props.history} title={'this is from routing'} count={this.props.count} />}/>
        <Route path='/' component={Login} />
      </Switch>
  </Router>)
}

getNonLoggedInRoute = () => {
  return(
  <Router history={this.props.history}>
   <Switch>
   <Route path='/login' component={Login}/>
   <Route path='/' component={Login} />
 </Switch>
</Router>)
}


render(){

  return (<div>
            {
              this.props.isLoggedIn ? this.getLoggedInRouting(): this.getNonLoggedInRoute()
            }
            
             
          </div>);
          
}
}

export default RoutingHolder ;