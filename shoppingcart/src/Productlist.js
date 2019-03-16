import React,{Component } from 'react';
import ProductView from './ProductView/ProductView';
class Productlist extends Component {

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
                }

        ]
    }
}

render(){
return(<div>
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