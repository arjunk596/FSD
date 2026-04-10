import React from 'react'
import "./UserCard.css"
import Counter from './Counter'
import Card from './Card'


const UserCard = (props) => {
    return (
        <div className="user-container">
            <p id="user-name">{props.name}</p>
            <img src={props.image} alt={props.name} id="user-img" />
            <Card image={props.cardImage} name={props.name} id="card-img" />
            <Counter />
            <p id="user-desc">{props.description}</p>
        </div>
    )
}

export default UserCard