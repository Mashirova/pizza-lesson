import React, { Component } from 'react';

import Pizza from "../../components/Pizza/Pizza"
import Controls from '../../components/Pizza/Controls/Controls'

import './PizzaBuilder.css';

const PRICES = {
  cheese: 50,
  olives: 60,
  sausage: 70,
  mushrooms: 65,
};

class PizzaBuilder extends Component {

  state = {
    ings: {
      cheese: 0,
      olives: 0,
      sausage: 0,
      mushrooms: 0
    },
    price: 100,
    purchasable: false
  }

  addIngredient = (ingName) => {
    const ings = {...this.state.ings};
    ings[ingName]++;

    let price = this.state.price;
    price += PRICES[ingName];

    this.setState({
      ings,
      price,
    });
  }

  removeIngredient = (ingName, event) => {
    event.stopPropagation();
    const ings = {...this.state.ings};
    if (ings[ingName] === 0 ) return;
    ings[ingName]--;

    let price = this.state.price;
    price -= PRICES[ingName];

    this.setState({
      ings,
      price,
    });
  }

  render() {
    return (
      <div className="pizza-wrap">
        <Pizza ings={this.state.ings}/>
        <Controls
          ings={this.state.ings}
          price={this.state.price}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          purchasable={this.state.purchasable}
          />
      </div>
    );
  }
}

export default PizzaBuilder;
