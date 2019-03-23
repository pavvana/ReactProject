import React , {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Login extends Component {
    render(){
        return(
            <div className='Logincontainer'> 
        <Form inline>
        <FormGroup>
          <Label for="exampleEmail" hidden>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
            </div>
                
        )
    }
}


export default Login; 

