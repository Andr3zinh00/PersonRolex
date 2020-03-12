import React from "react";
import './campo-busca.styles.css'

export const CampoBusca = ({placeholder, changer}) => (
  <input
    className='search'
    type='search'
    onChange={changer}
    placeholder={placeholder}
  />

);