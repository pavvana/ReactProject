import React from 'react';
import './Header.css';


const ParaStyle = {
    fontSize : 40
}

const HeaderView = (props) => {
return(
<div ><p>{props.logo}</p>
         <p >{props.searchValue}</p>    
         <input type="button" onClick={props.searchTry} value ="Apply" />
         <p style={ParaStyle}>{props.title}</p>
         <p id='id-1'>{props.searchValue}</p>
         <p>{props.searchValue}</p>
    </div>
    
)
}

export default HeaderView;