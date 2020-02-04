import React from 'react';
import {Car} from './Car';
import {Comments} from './Comments';

export class App extends React.Component {

  render() {

    var registracija={
      grad:"Skopje",
      oznaka:"SK-9999-AB",
    }
    var vozila = [
      {brand:"Ford",model:"Ka",year:1997,number:124142,registracija:registracija},
      {brand:"Opel",model:"Astra",year:2001,number:467375,registracija:registracija},
      {brand:"Nissan",model:"Patrol",year:2012,number:346236,registracija:registracija},
    ];

      return (
        <div>
          {/*<Car vozila={vozila}/>*/}
          <Comments 
          date="11-11-2012"
          broj={5}
          isValid={true} />
        </div>
      )
  }
}