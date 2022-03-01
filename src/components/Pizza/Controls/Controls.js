import React from 'react';
import ControlItem from './ControlItem/Controltem';
import './Controls.css';
import {Button} from 'react-bootstrap'

const Controls = ({ings, price, addIngredient, removeIngredient, purchasable}) => {

  return (
      <div className="pizza-controls">
        <h3 className="pizza-controls__title">Выберите ингридиенты</h3>
        <div className="pizza-control__list">
          {
            Object.keys(ings).map(ingsName => {
              return <ControlItem
                key={ingsName}
                name={ingsName}
                count={ings[ingsName]}
                add={() => addIngredient(ingsName)}
                remove={(event) => removeIngredient(ingsName, event)}
              />
            })
          }
        </div>
        <div className="pizza__price">Цена: <span>{price}</span></div>
        <div className="pizza-order">
          <button className="pizza-order__btn" disabled={!purchasable}>Оформить заказ</button>
        </div>
      </div>
  );
};

export default Controls;
