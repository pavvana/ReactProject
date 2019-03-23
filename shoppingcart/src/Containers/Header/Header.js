 import React , { Component } from 'react';
 import { Button } from 'reactstrap';

import './Header.css';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
                searchValue:''
        }
    }

    onSearchEvent = (e) =>{
        let searchValue = e.target.value;
        this.setState({
            searchValue:searchValue
        })

        console.log(searchValue);
}

LoginClick=() => {
    let history = this.props.history;
    
    history.push({
        pathname:'/Loginpage' 
        
    });
    

}

Replaceclick=() => {
    let history = this.props.history;
    
    history.replace({
        pathname:'/Signup',
        data :{
            username:'sawan',
            age:28
        }
    });

}

render(){
    return(
        <div className={'Headercontainer'}>
        
        <div className='logoicon'>Flipkart</div>

        <div className='gotoprolink'><a href="/products">go to products</a></div>

        <div className='searchtab'><input  className='searchtab' type="text" name="t1" placeholder="Search Products, brands and  more" 
        onChange={this.onSearchEvent} value={this.state.searchValue}/></div>

        <div className='ObuttonL'><Button color="primary" size="sm" onClick={this.LoginClick} >Login</Button></div>

        <div className='ObuttonS'><Button color="primary" size="sm" onClick={this.Replaceclick} >SingnUp</Button></div>

        <div className='cartlogo'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlz8lzPKDvLHC_xlou9dXw2S9e0x05ZgER8FDEK9IeUjx05QQm"
        alt="Cart" height="20" width="20"></img></div>
                </div>
         )
        }    
}
export default Header;