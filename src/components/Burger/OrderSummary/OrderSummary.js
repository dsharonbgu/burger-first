import React from 'react';
import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";


const orderSummary = (props) => {

    let ingredientsSummary = Object.keys(props.ingredients).map(
        (igkey)=> {
            return (<li key={igkey}><span style={{textTrasform: 'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]} </li>);
        });


    return(
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.cancelHandler}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>



        </Auxiliary>
    );
};


export default orderSummary