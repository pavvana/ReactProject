import React,{Component} from 'react';
import axios from 'axios';

const IsAuthenticated = (RawComponent) => {
    return class extends Component {

        componentDidMount(){
            // to guard this component i.e not to display when not logged in
            let isLoggedIn = sessionStorage.getItem('isloggedIn')
            if(isLoggedIn !== "Yes"){
               this.props.history.replace('/login');
            }

            // fetch users from api
            axios.get('https://jsonplaceholder.typicode.com/users').then(resp => {
                console.log('resp',resp)
            })
            

        }
        
        render(){
            return(<RawComponent/>)
        }
    }
}

export default IsAuthenticated;
