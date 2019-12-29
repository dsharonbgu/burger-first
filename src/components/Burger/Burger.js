import React from 'react';
import classes from './burger.css';
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";


const burger = ()=>{
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type={"bread-top"}/>
            <BurgerIngredient type={"salad"}/>
            <BurgerIngredient type={"cheese"}/>
            <BurgerIngredient type={"meat"}/>
            <BurgerIngredient type={"bread-bottom"}/>
        </div>


    );
};

export default burger;
