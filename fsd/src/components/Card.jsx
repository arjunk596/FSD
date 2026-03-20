import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <div id="user-container">
            <img src={props.image} alt={props.name} id="card-img" />
        </div>
    )
}

export default Card