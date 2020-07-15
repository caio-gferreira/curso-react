import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className="card ">
        <div className="card-body">
            <div className="title card-title">
                <h2>{props.titulo}</h2>
            </div>

            <div className="content card-text">
                <p>{props.children}</p>
            </div>
        </div>
    </div>
)

export default Card;