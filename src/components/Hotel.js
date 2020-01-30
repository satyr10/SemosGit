import React from 'react';
import { render } from '@testing-library/react';

export class Hotel extends React.Component {
render(){

console.log(this.props)
return(
    <div>
    {/*this.props.imaSobi ? <h2>Imame sobi</h2> : <h2>Nemame Sobi</h2>*/}
    {this.props.imaSobi && <h2>imame Sobi</h2>}
    </div>
)
}
}