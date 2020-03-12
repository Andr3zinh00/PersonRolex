import React from 'react';
import './cardList.css';
import { Card } from "../card/card.component";
export const CardList = (props) => {
  return (
    <div className="card-list">
    {props.pessoas.map(pessoa => (
      <Card key={pessoa.id} people={pessoa}/>
    ))}
    </div>
  )
}