import React,{Component} from 'react';
import User from './User';
class Users extends Component{

      state={
        users: [
          {name:"John",age:20},
          {name:"Jason",age:30},
          {name:"Peter",age:40},
        ],
        title:"Users List"
      };

      makeMeYounger = () =>{
        // this.setState({
          // users:[
            // {name:"John",age:10},
            // {name:"Jason",age:20},
            // {name:"Peter",age:30},
          // ]
        // })
        // console.log(this.state.users);
        const newState=this.state.users.map((user)=>{
          const tempUser=user;
          tempUser.age -=10;
          return tempUser;
        });
        this.setState({
          newState
        });
      }
      render(){
        return (<div>
          <button onClick={this.makeMeYounger}>Make Me 10 Years Younger</button>
          <br/>
          <h1>{this.state.title}</h1>
          // <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
          // <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
          // <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
          {
            this.state.users.map((user)=>{
              return <User age={user.age}>{user.name}</User>
            })
          }
          </div>)
        }
}
export default Users;
