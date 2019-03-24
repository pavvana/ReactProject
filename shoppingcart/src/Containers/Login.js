import React,{Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

constructor(props){
    super(props);
    
    this.state = {

        
    }
}

render(){

return(<div>
       Login page
       <Link to='products' > Go to products </Link> 
    </div>
    )

}

}

export default Login;