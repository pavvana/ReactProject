 import React , { Component } from 'react';
 import { Button } from 'reactstrap';
 import { connect } from 'react-redux';

import './Header.css';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
                searchValue:'',
                isgotoproddisplay:true
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
    
 componentDidMount() {
    let history = this.props.history;

    history.listen((data,action)=>{
        if (data.pathname === '/products')
        {
            
            this.setState({
                isgotoproddisplay : false
            }) 
        }
        else
        {
            this.setState({
                isgotoproddisplay : true
            })
        }

    });
 }
 
    
 Replaceclick=() => {
    let history = this.props.history;
    
    history.replace({
        pathname:'/products',
        data :{
            username:'sawan',
            age:28
        }
    });

}

render(){
    console.log('Header', this.props)
    return(
        <div className={'Headercontainer'}>
        
            <div className='logoicon'>Flipkart</div>
            {
                this.state.isgotoproddisplay ? 
                <div className='gotoprolink'><a href="/products">go to products</a></div> : null
            }

            <div className='searchtab'><input  className='searchtab' type="text" name="t1" placeholder="Search Products, brands and  more" 
            onChange={this.onSearchEvent} value={this.state.searchValue}/></div>

            <div className='ObuttonL'><Button color="primary" size="sm" onClick={this.LoginClick} >Login</Button></div>

            <div className='ObuttonS'><Button color="primary" size="sm" onClick={this.Replaceclick} >SingnUp</Button></div>

            <div className='cartlogo'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlz8lzPKDvLHC_xlou9dXw2S9e0x05ZgER8FDEK9IeUjx05QQm"
                alt="Cart" height="20" width="20"/>
                <span>{this.props.displayCount}</span>
            </div>
        </div>
         )
        }    
}

const mapStateToProps = (state) => {
    console.log('state in mapStateToProps',state)
    return {
        displayCount:state.currentCartCount
    }
}

export default connect(mapStateToProps)(Header);