import React, {Component} from "react";
import Order from '../../components/Order/Order'
import axios from '../../axios-orders';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
class Orders extends Component {
    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let k in res.data) {
                    fetchedOrders.push({
                        ...res.data[k],
                        id: k
                    });
                }
                this.setState({loading: false, orders:fetchedOrders})
            })
            .catch(err => {
                this.setState({loading: false})
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(o => (
                    <Order
                        key={o.id}
                        ingredients={o.ingredients}
                        price={o.price}
                    />
                    ))}
            </div>
        );
    }
}



export default withErrorHandler(Orders, axios);