import React from 'react';
import PropTypes from 'prop-types';
export class Car extends React.Component {
    render() {
        console.log(this.props.vozila)
        return(
            <div id="cars">
                <table border="1">
                    <thead>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Vehicle Number</th>
                        <th>Grad</th>
                        <th>Oznaka</th>
                    </thead>
                    <tbody>
                        {this.props.vozila.map((car,i)=>{
                            return (
                                <tr key={i}>
                                <td>{car.brand}</td>
                                <td>{car.model}</td>
                                <td>{car.year}</td>
                                <td>{car.number}</td>
                                <td>{car.registracija.grad}</td>
                                <td>{car.registracija.oznaka}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}
