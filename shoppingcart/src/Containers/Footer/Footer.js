import React , {Component} from 'react';
import './Footer.css'

class Footer extends Component{
    render(){
        return(
            <div className='footercontainer'>
          <footer>
          
          <p className='FooterContent'>Contact information: <a href="mailto:someone@example.com">someone@example.com</a>.</p>
          </footer>
          </div>
        )
    }

}

export default Footer;