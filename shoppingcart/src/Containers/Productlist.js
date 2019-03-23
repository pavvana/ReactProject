import React,{Component } from 'react';
import ProductView from '../Views/ProductView/ProductView';
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


    console.log(this.props.location);


//    let name = this.props.location.data.username;
    

return(<div>
  
        
        <div>
    
        {//this is displaying product
            this.state.mobiles.map((mobile,index) => {
                return (
                    
                    <ProductView key={mobile.name+index} name={mobile.name} price={mobile.price} color={mobile.color} logo={mobile.logo}/>
                )
                })
        }
        </div>
        </div>
)

}

}

export default Productlist;