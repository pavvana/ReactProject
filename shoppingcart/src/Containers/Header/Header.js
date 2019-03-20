 import React , { Component } from 'react';

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
render(){
    return(
        <div className={'cls-1'}>
        <div className='cls-2'> 
         
        <p className='cls-11'>Flipkart</p>

        <input  className='cls-12' type="text" name="t1" placeholder="Search Products, brands and  more" onChange={this.onSearchEvent} value={this.state.searchValue}/>   
        
        <a href="www.google.com">Login</a>
        <p>/</p>
        <a href="www.google.com">Signup</a>
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlz8lzPKDvLHC_xlou9dXw2S9e0x05ZgER8FDEK9IeUjx05QQm" alt="Cart" height="20" width="20"></img>
        
        </div>
        </div>
    )
}    
}
export default Header;