import React, { Component} from 'react';
import './card-list.styles.css';
import {Card} from "../card/card.component";

export const CardList = (props) => (
    <div className='card-list'>
        {/*{props.children}*/}
        {
            props.monsters.map(monster => (
                // <h1 key={monster.id}> { monster.name } </h1>
                <Card key={monster.id} monster={monster}/>
            ))}
    </div>
);
