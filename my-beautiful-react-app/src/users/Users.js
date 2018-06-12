import React,{Component} from 'react';
import User from './User';
class Users extends Component{
    render(){
      return(
      <div>
        <h1>{this.props.title}</h1>
        <User age="20">John</User>
        <User age="30">Jack</User>
        <User></User>
        <User>Peter</User>
      </div>
    )
  }
}
export default Users;
