import React, { Component } from "react";
import Aux from '../../hoc/Aux_';
import Burger from '../../components/Burger/Burger';

class BurgerKing extends Component {
    render() {
        return (
            <Aux>
                <Burger/>
                <div>Burger King</div>
            </Aux>
        );
    }
}

export default BurgerKing;