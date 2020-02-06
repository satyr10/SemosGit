import React from 'react';
import {Map} from './Map';
export class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
      username: "",
      password: ""
    }
  }

usernameChangeHandler = (event) => {
  this.setState({
    username: event.target.value
  })
}

passwordChangeHandler = (event) => {

  this.setState(
    {
      password: event.target.value
    }
  )
}

  render() {

    var niza = [{naslov:"Pulp Fiction",image:"https://www.indiewire.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-22-at-5.09.08-PM.png?w=780"},
     {naslov:"Back to the Future",image:"https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/9/94/bttf2-main.jpg?itok=SLKmsUQ3"},
    {naslov:"The Godfather",image:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"}]

    return(
      <div>
        {/*<Map filmovi = {niza}/>*/}
        <input 
        value={this.state.username}
        name="Username"
        type="text"
        onChange={this.usernameChangeHandler}
        placeholder="Username"
        />
        <h2>{this.state.username}</h2>
        <h2>{this.state.password}</h2>
        <br/>
        <input
        name="password"
        value={this.state.password}
        type="password"
        placeholder="password"
        onChange={this.passwordChangeHandler}
        />
        </div>
    )
  }
}
