import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import classes from './BurgerBuilder.css';

class BurgerBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fillings: {
                salad: 0,
                bacon: 0,
                mayo: 0,
                meat: 0
            },
            fillingsPrice: {
                salad: 1,
                bacon: 2,
                mayo: 1.5,
                meat: 3
            },
            calculatePrice: 4
        }
    }
    addIngredient = (type) => {
        const oldCount = this.state.fillings[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.fillings };
        updatedIngredients[type] = updatedCount;

        //   const oldPrice=this.state.calculatePrice;
        const newPrice = this.state.calculatePrice + (updatedCount - oldCount) * (this.state.fillingsPrice[type]);

        this.setState({ fillings: updatedIngredients, calculatePrice: newPrice });
    }
    removeIngredient = (type) => {
        const oldCount = this.state.fillings[type];
        if (oldCount <= 0) return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = { ...this.state.fillings };
        updatedIngredients[type] = updatedCount;

        const newPrice = this.state.calculatePrice - (oldCount - updatedCount) * (this.state.fillingsPrice[type]);

        this.setState({ fillings: updatedIngredients, calculatePrice: newPrice });
    }
    render() {
        const disabledkeys = { ...this.state.fillings };
        Object.keys(disabledkeys).map((value) => {
            disabledkeys[value] = disabledkeys[value] <= 0;
        });
        return (
            <div>
                <div>
                <Burger ingredients={this.state.fillings} />
                </div>
                <BuildControls add={this.addIngredient}
                    remove={this.removeIngredient}
                    keys={disabledkeys}
                />
                <h3 className={classes.price}>Cart Price:
                <strong>${this.state.calculatePrice}</strong>
                </h3>
            </div>
        );
    }
}


export default BurgerBuilder;