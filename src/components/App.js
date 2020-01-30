import React from 'react';
import { Welcome } from './Welcome';
import {Hotel} from './Hotel';
import {User} from './User';

export class App extends React.Component {

  render() {
    var godiniFilip = 25;
    var godiniPero = 18;
    var hasVacancy=false;

    var user={
      ime:"Filip",
      prezime: "Dzukovski",
      email: "filipdzukovski@yahoo.com",
      image: "https://www.smallbizgenius.net/wp-content/uploads/2019/11/smallbizgenius_favicon.png",
    }
    return (
      <div>
      <h2>Welcome</h2>
      <Welcome name={"Filip"} age={godiniFilip}/>
      <Welcome name={"Pero"} age = {godiniPero}/>
      <hr/>
      <Hotel imaSobi = {hasVacancy} />
      <br/>
      <br/>
      <User korisnik={user}/>
      </div>
    )
  }

}