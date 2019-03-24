 import React , { Component } from 'react';
 import { Button } from 'reactstrap';

import './Header.css';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
                searchValue:'',
                isGotoProducts:true
        }
    }

    onSearchEvent = (e) =>{
        let searchValue = e.target.value;
        this.setState({
            searchValue:searchValue
        })

        console.log(searchValue);
}

gotoProducts = () => {
    let navigationObj = {
        pathname:'/products',
        state:{
            username:'Yogesh',
            company:'Intelliswift'
        },
        data:{
            products:[{
                name:'Nokia',
                price:200,
                color:'red',
                logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFBRdGo-cS2IYn6I7xFFsf62spfAUqo90hc0XpVPnTQTxy2MS'
                
            }]
        }
    }
    this.props.history.push(navigationObj)
}



replaceDemo = () => {
    let pathForHome = 'products';
    // replaces current path in browser navigation stack,
    //Hence you cannot go back to previous page using browser back button
    this.props.history.replace({
        pathname:'/'+pathForHome,
        state: { 
            username: 'yogesh' 
        }
    });
}

getProductsLink = () => {

    if( this.state.isGotoProducts){
        return (
            <a href='/products' > Go to products </a>
        )
    }else{
        return null;
    }
}


componentDidMount(){
    
    this.props.history.listen( (data, action) => {
    console.log('path changed data=', data);
    console.log('path changed action=', action);
    if(data.pathname === "/products"){
        this.setState({
            isGotoProducts: false
        })
    }else{
        this.setState({
            isGotoProducts: true
        })
    }
    });
}

render(){
    return(
        <div className={'cls-1'}>
        <div className='cls-2'> 
         
        <p className='cls-11'>Flipkart</p>

        <input  className='cls-12' type="text" name="t1" placeholder="Search Products, brands and  more" onChange={this.onSearchEvent} value={this.state.searchValue}/>   
        
        <a href="www.google.com">Login</a>
        {// use of ternary operator
            this.state.isGotoProducts ? <a href='/products' > Go to products </a> :null
        }
        { // another way
            this.getProductsLink()
        }
        
        <Button color="primary" onClick={this.gotoProducts}>Login</Button>
        <Button color="primary" onClick={this.replaceDemo}>Replace</Button>

        
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlz8lzPKDvLHC_xlou9dXw2S9e0x05ZgER8FDEK9IeUjx05QQm" alt="Cart" height="20" width="20"></img>
        
        </div>
        </div>
    )
}    
}
export default Header;