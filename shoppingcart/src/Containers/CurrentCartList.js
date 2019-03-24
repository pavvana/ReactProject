import React,{Component } from 'react';

import ProductView from '../Views/ProductView/ProductView';
import IsAuthenticated from '../hoc/IsAuthenticated';

class CurrentCartList extends Component {

constructor(props){
    super(props);
    
    this.state = {

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
                }
        ]
    }
}


render(){
console.log('testing.......'+this.props.count);  

return(<div>
        <p>Current items in your cart</p>
    
        {//this is displaying product
            this.state.mobiles.map((mobile,index) => {
                return (
                    
                    <ProductView key={mobile.name+index} name={mobile.name} price={mobile.price} color={mobile.color} logo={mobile.logo}/>
                )
                })
        }
        </div>
)

}

}

export default IsAuthenticated(CurrentCartList);