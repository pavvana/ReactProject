import React , {Component} from 'react';
import {Router , Route } from 'react-router-dom';
import Frontpage from './Fronpage';
import Productlist from './Productlist';
import Login from './Login';
import Singnup from './Singnup';


                

class RoutingHolder extends Component {
    render(){
        return(
                <div>
                    <Router history={this.props.history}>
                    <Route path="/" component={Frontpage} exact={true}/> 
                        <Route path="/Loginpage" component={Login} exact={true}/> 
                        <Route path="/products" component={Productlist}/>
                        <Route path="/Signup" component={Singnup}/>
                    </Router>
                </div>

        )
    }
}

export default RoutingHolder;