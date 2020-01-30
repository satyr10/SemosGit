import React from 'react';


export class Welcome extends React.Component{

    render(){
        
        console.log(this.props)
            return(
            <h3>Hello This is {this.props.name}, im {this.props.age} years old</h3>
            
        )
    }
}