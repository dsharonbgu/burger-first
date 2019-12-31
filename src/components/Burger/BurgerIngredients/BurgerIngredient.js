import React, {Component} from 'react';
import classes from './BurgerIngredient.css'
import PropTypes from 'prop-types';
//import BurgerBuilder from "../../../containers/BurgerBuilder/BurgerBuilder";

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case("bread-bottom"):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ("bread-top"):
                ingredient = <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>;
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    };
}





export default BurgerIngredient;



BurgerIngredient.propTypes={
    type: PropTypes.string.isRequired
};





/*
const BreadBottomStyle ={
    height: "13%",
    width: "50%",
    background: "linear-gradient(#F08E4A, #e27b36)",
    borderRadius: "0 0 30px 30px",
    boxShadow: "inset -15px 0 #c15711",
    margin: "2% auto"

}

const BreadTopStyle= {
    height: "20%",
    width: "50%",
    background: "linear-gradient(#bc581e, #e27b36)",
    borderRadius: "50% 50% 0 0",
    boxShadow: "inset -15px 0 #c15711",
    margin: "2% auto",
    position: "relative"
}

const Seeds1Style= {
    width: "10%",
    height: "15%",
    position: "absolute",
    backgroundColor: "white",
    left: "30%",
    top: "50%",
    borderRadius: "40%",
    transform: "rotate(-20deg)",
    boxShadow: "inset -2px -3px #c9c9c9"
}

// const Seeds1S:after {
//     content: "";
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     background-color: white;
//     left: -170%;
//     top: -260%;
//     border-radius: 40%;
//     transform: rotate(60deg);
//     box-shadow: inset -1px 2px #c9c9c9;
// }

// .Seeds1:before {
//     content: "";
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     background-color: white;
//     left: 180%;
//     top: -50%;
//     border-radius: 40%;
//     transform: rotate(60deg);
//     box-shadow: inset -1px -3px #c9c9c9;
// }

const Seeds2Style = {
    width: "10%",
    height: "15%",
    position: "absolute",
    backgroundColor: "white",
    left: "64%",
    top: "50%",
    borderRadius: "40%",
    transform: "rotate(10deg)",
    boxShadow: "inset -3px 0 #c9c9c9"
}

// .Seeds2:before {
//     content: "";
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     background-color: white;
//     left: 150%;
//     top: -130%;
//     border-radius: 40%;
//     transform: rotate(90deg);
//     box-shadow: inset 1px 3px #c9c9c9;
// }


const MeatStyle = {
    width: "50%",
    height: "5%",
    background: "linear-gradient(#7f3608, #702e05)",
    margin: "2% auto",
    borderRadius: "15px"
}

const CheeseStyle = {
    width: "55%",
    height: "3%",
    margin: "2% auto",
    background: "linear-gradient(#f4d004, #d6bb22)",
    borderRadius: "20px"
}

const SaladStyle = {
    width: "52%",
    height: "5%",
    margin: "2% auto",
    background: "linear-gradient(#228c1d, #91ce50)",
    borderRadius:"20px"
}

const BaconStyle = {
    width: "50%",
    height: "2%",
    background: "linear-gradient(#bf3813, #c45e38)",
    margin: "2% auto"
}




/*
const BurgerIngredient =(props) => {
    if (props.type === "bread-bottom") {
        return (<div style={BreadBottomStyle}>bottom</div>);
    }
    if (props.type === "bread-top") {
        return (<div style={BreadTopStyle}>top
            <div style={Seeds1Style}>seed1</div>
            <div style={Seeds2Style}>seed2</div>
        </div>);
    }
    if (props.type === "meat") {
        return (<div style={MeatStyle}>meat</div>);
    }
    if (props.type === "cheese") {
        return (<div style={CheeseStyle}>cheese</div>);
    }
    if (props.type === "salad") {
        return (<div style={SaladStyle}>salad</div>);
    }
    if (props.type === "bacon") {
        return (<div style={BaconStyle}>bacon</div>);
    } else
        return (<div style={BaconStyle}>big problem</div>);

}
*/



/*
            /*
            let ingredient = null;
            if (this.props.type === "bread-bottom") {
                ingredient = <div style={BreadBottomStyle}>bottom</div>;
            }
            if (this.props.type === "bread-top") {
                ingredient = <div style={BreadTopStyle}>top
                    <div style={Seeds1Style}>seed1</div>
                    <div style={Seeds2Style}>seed2</div>
                </div>;
            }
            if (this.props.type === "meat") {
                ingredient = <div style={MeatStyle}>meat</div>;
            }
            if (this.props.type === "cheese") {
                ingredient = <div style={CheeseStyle}>cheese</div>;
            }
            if (this.props.type === "salad") {
                ingredient = <div style={SaladStyle}></div>;
            }
            if (this.props.type === "bacon") {
                ingredient = <div style={BaconStyle}></div>;
            } else {
               // ingredient = <div className={classes.Bacon}>{this.props.type}</div>;
            }
            return ingredient;
        }
    }
    */
