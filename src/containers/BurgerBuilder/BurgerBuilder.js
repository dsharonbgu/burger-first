import React, {Component} from 'react';
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENTS_PRICES={
    salad: 0.5,
    cheese: 0.4,
    bacon: 0.7,
    meat: 1.3
};


class BurgerBuilder extends Component {

       state={
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
           purchasable: false,
           purchasing: false
        };

       updatePurchaceState= (ingredients) => {
           let sum = Object.keys(ingredients).map ((igkey)=>{
               return ingredients[igkey]
           }).reduce((sum,el)=> { return sum +el;},0);
           this.setState({purchasable: sum>0})
       }

     ingredientsAdd = (type) =>{
        let oldCount = this.state.ingredients[type];
        let newCount = oldCount+1;
        let newIngredients = {...this.state.ingredients};
        newIngredients[type] = newCount;
        let newPrice = this.state.totalPrice + INGREDIENTS_PRICES[type];
        this.setState({ingredients: newIngredients, totalPrice: newPrice});
         this.updatePurchaceState(newIngredients);
    }



    removeIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        if (oldCount > 0){
            let newCount = oldCount-1;
            let newIngredients = {...this.state.ingredients};
            newIngredients[type] = newCount;
            let newPrice = this.state.totalPrice - INGREDIENTS_PRICES[type];
            this.setState({ingredients: newIngredients, totalPrice: newPrice});
            this.updatePurchaceState(newIngredients);
        }
    }

    purchaseHandler= ()=> {
           this.setState({purchasing: true});
    }

    purchaseCancelHandler= ()=> {
        this.setState({purchasing: false});
    }
    purchaseContinueHandler= ()=> {
        alert("You continue!");
    }



    render() {
        const disabledInfo={
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0 ? true : false;
        }

        return (
           <Auxiliary>
               <Modal modalclosed={this.purchaseCancelHandler} show={this.state.purchasing}>
                   <OrderSummary
                        cancelHandler={this.purchaseCancelHandler}
                        purchaseContinue={this.purchaseContinueHandler}
                       ingredients ={this.state.ingredients}
                        price={this.state.totalPrice}

                   />
               </Modal>
                   <Burger ingredients={this.state.ingredients}/>
               <BuildControls
                   addHandler={this.ingredientsAdd}
                   removeHandler={this.removeIngredientHandler}
                   disabledControl={disabledInfo}
                   price={this.state.totalPrice}
                   purchasable={this.state.purchasable}
                   ordered={this.purchaseHandler}
               />

           </Auxiliary>
        );
    }
}

export default BurgerBuilder;