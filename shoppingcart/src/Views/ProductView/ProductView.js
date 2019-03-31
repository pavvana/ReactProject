import React from 'react';

import cartActions from '../../redux/actions/cartActions';

import './ProductView.css';



const ProductView = (props) => {

    return (
        <div className='ProductContainer'>
            <div className='ProductContainerL'>
            <img src={props.logo} alt='Loading' height={70} width={80} />
            </div>
            <div className='ProductContainerM'>
                <div> name :{props.name} </div>
                <div> price :{props.price} </div>
                <div> color :{props.color} </div>
            </div>
            <div className='ProductContainerR'>
                <input type="button" value='Add to cart' onClick={()=>{
                    cartActions.addProductToCart(props.name)
                    cartActions.incrementByOne()
                    } }/> 
            </div>
        </div>);

}

export default ProductView;