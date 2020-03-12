import React from 'react';
import './card.component.css'
export const Card = props => (
  <div className='card-container'>
    <img alt='' src={`https://flathash.com/${props.people.id}`} style={{ height: 180, width: 180, alignSelf:'center'}} />
    <h2>{props.people.name}</h2>
    <p>{props.people.email}</p>
  </div>
);
