import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="salad" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="mustard" />
            <BurgerIngredient type="ketchup" />
            <BurgerIngredient type="onion" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;