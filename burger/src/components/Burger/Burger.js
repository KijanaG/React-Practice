import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    var ingredientList = [];
    const addIngredients = (key) => {
        var int = props.ingredients[key];
        for(var i = 0; i <int; i++) {
            ingredientList.push(key);
        }
    }
    addIngredients("salad");
    addIngredients("tomato");
    addIngredients("meat");
    addIngredients("cheese");
    addIngredients("bacon");
    let transformedIngredients = ingredientList.map((igKey, i) => {
        return <BurgerIngredient key={igKey+i} type={igKey} />
    })
    // let transformedIngredients = Object.keys(props.ingredients)
    //     .map(igKey => {
    //          return [...Array(props.ingredients[igKey])].map((_, i) => {
    //             return <BurgerIngredient key={igKey+i} type={igKey} />;
    //          });  // [ , ]
    //     })
    //     console.log("::***",transformedIngredients);
    //     transformedIngredients.reduce((prev, curr) => {
    //         return prev.concat(curr);
    //     }, []);
        if(transformedIngredients.length === 0)  {
            transformedIngredients = <p style={{fontSize:'90%'}}>Please start adding ingredients!</p>
        }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;