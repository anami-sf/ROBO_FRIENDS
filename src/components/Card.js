import React from 'react';

const Card = ({id, name, email, phone}) => {
    //destructuring (props) => const {name, email, id} = props
    return(
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"></img>
            <div>
                <h2>{name}</h2>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;

