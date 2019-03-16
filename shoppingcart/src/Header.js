import React , { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderView from './HeadersView';

class Header extends Component {

constructor(props){
    super(props);
    this.state = {
        islogin : false ,
        logo : '//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png',
        
        iscartempty : true
    }
}

searchTry =() => {
    let searchnew = this.state.searchValue;

    searchnew = "tetetetette";

    this.setState ({
    
        searchValue : searchnew 
    }) 

}

render(){
    return(
        <HeaderView logo={this.state.logo} searchValue={this.state.searchValue}  title={this.props.title}
        searchTry={this.searchTry}/>
    
    )
}
}

Header.defaultProps ={
    title : 'this is default value'   
}

Header.propTypes = {
 title : PropTypes.string,
 searchValue : PropTypes.string
}

export default Header;