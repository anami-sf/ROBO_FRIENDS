import React from 'react';
import Card from './Card.js';


const CardList = ({robots}) => {

    //cardComponenet returns an array of cards
    const cardsArray = 
        robots.map(user => {
            return (<Card key={user.id} id={user.id} name={user.name} email={user.email} phone={user.phone}/>)
        })

    return(
        <div> { cardsArray } </div>
    );
}

export default CardList;