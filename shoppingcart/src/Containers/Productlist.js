import React,{Component } from 'react';
import ProductView from '../Views/ProductView/ProductView';
class Productlist extends Component {

constructor(props){
    super(props);
    console.log('Productlist param passed from another route',props.location);

    let extraData =[];

    if(props.location && props.location.data && props.location.data.products){
        extraData = [...props.location.data.products]
    }
    let username = '';
    if(props.location && props.location.state && props.location.state.username){
        username = this.props.location.state.username
    }

    
    this.state = {
        username:username,
        mobiles:[
                {
                    name:'samsung',
                    price:2000,
                    color:'blue',
                    logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFBRdGo-cS2IYn6I7xFFsf62spfAUqo90hc0XpVPnTQTxy2MS'
                    
                },
                {
                    name:'nokia',
                    price:5000,
                    color:'black',
                    logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFBRdGo-cS2IYn6I7xFFsf62spfAUqo90hc0XpVPnTQTxy2MS'
                },
                {
                    name:'motorolla',
                    price:7000,
                    color:'red',
                    logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFBRdGo-cS2IYn6I7xFFsf62spfAUqo90hc0XpVPnTQTxy2MS'
                },
                {
                    name:'iphone',
                    price:20000,
                    color:'yellow',
                    logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFBRdGo-cS2IYn6I7xFFsf62spfAUqo90hc0XpVPnTQTxy2MS'
                },
                {
                    name:'xiomi',
                    price:200,
                    color:'white',
                    logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFBRdGo-cS2IYn6I7xFFsf62spfAUqo90hc0XpVPnTQTxy2MS'
                },
                ...extraData
        ]
    }
}


componentDidMount(){
    // to guard this component i.e not to display when not logged in
    let isLoggedIn = false; // temp asume not logged in
    if(!isLoggedIn){
       // this.props.history.replace('/login');
    }
}

render(){
return(<div>
        <p>{this.props.title}</p>
        <p>{this.state.username}</p>
        {
            this.state.mobiles.map((mobile,index) => {

                return ( <ProductView key={mobile.name+index} name={mobile.name} price={mobile.price} color={mobile.color} logo={mobile.logo}/> )
                })
        }

        
</div>
)

}

}

export default Productlist;