import React from 'react';

function Details({name,roll}){
    return(
        <div>
            <h3>Name: {name}</h3>
            <h3>Roll: {roll}</h3>
        </div>
    )
}

export default Details;