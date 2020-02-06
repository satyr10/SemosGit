import React from 'react';

export class Map extends React.Component {

    render() {
        return (
            <div>
                {this.props.filmovi.map((film,i)=>{
                    return(
                <div key = {i}> 
                <h2>{film.naslov}</h2> 
                <img src={film.image} /> 
                </div>
                    )
                })}
            </div>
        )
    }
}