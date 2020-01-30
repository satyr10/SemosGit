import React from 'react';

export class User extends React.Component {

    render() {
        console.log(this.props)
        return (

            <div>
                <div id="name">
                    <h3>{this.props.korisnik.ime}</h3>
                </div>
               
                <div id="prezime">
                    <h4>{this.props.korisnik.prezime}</h4>
                </div>
               
                <div id="email">
                    <p>{this.props.korisnik.email}</p>
                    </div>
                <div id="image">
                    <img src= {this.props.korisnik.image}/>
                </div>
            </div>

        )
    }

}