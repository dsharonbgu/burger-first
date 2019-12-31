import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'


const controls = [
    {label:"Salad", type: "salad"},
    {label:"Bacon", type: "bacon"},
    {label:"Cheese", type: "cheese"},
    {label:"Meat", type: "meat"}
];



const BuildControls = (props)=> (
    <div className={classes.BuildControls}>
        <p>current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(el => (
            <BuildControl
                key={el.label}
                label={el.label}
                added={()=>props.addHandler(el.type)}
                removed={ ()=> props.removeHandler(el.type)}
                disabledCon={props.disabledControl[el.type]}
            />
                ))}
                <button
                    className={classes.OrderButton}
                    disabled={!props.purchasable}
                    onClick={props.ordered}
                >ORDER NOW</button>
    </div>
);



export default BuildControls;

