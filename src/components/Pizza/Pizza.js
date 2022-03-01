import React from 'react';
import Ingredient from './Ingredient/Ingredient';

import './Pizza.css';

const Pizza = ({ings}) => {

  let ingList = [];

  for (let ingName in ings) {
    if(ings[ingName] !== 0) {
      ingList.push(
        <Ingredient key={ingName} ingName={ingName} />
      )
    }
  }

  if (ingList.length === 0) {
    ingList = <h3 className="title-empty">Добавьте ингридиенты</h3>
  }

  return (
      <div className="Pizza">
        {ingList}
      </div>
  );
};

export default Pizza;
