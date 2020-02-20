import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import {Users} from './Users';
import {User} from './User';
import axios from 'axios';

export class App extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      podatoci:[]
    }
  }

  componentDidMount(){
    this.getUsers();
  }

  getUsers = () => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res=>res.json())
    // .then(data=>{
    //   console.log(data)
    // })
    // .catch(err=>{
    //   console.error("Ima greska tuka => ",err);
    // })
    
    axios({
      url:'https://jsonplaceholder.typicode.com/users',
      method: "GET"
    }).then(res=>{
      this.setState({
        podatoci: res.data
      })
     
    }).catch(err=>{
      console.error(err);
    })
  
  }



  render() {
    console.log(this.state)
    return(
      <div>
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/user" render={()=>{
          return <User userList={this.state.podatoci}/>
        }}/>
      </Switch>
      {/* <button onClick = {()=>{this.getUsers()}}>Povikaj Useri</button> */}
      </div>
    )
  }
}