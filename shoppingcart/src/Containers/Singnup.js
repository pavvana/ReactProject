import React,{Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { connect } from 'react-redux';

import loadPostsActions from '../redux/actions/postActions';

class Singnup extends Component{

componentDidMount(){
  loadPostsActions.loadPosts();
}

render(){
  console.log('SignUp', this.props);
    return(
        <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <Button>Submit</Button>
        </Form>



    )
}

}

const mapStateToProps = (state) => {
  return{
    posts: state.postReducer.posts
  }
}
export default connect(mapStateToProps)(Singnup);