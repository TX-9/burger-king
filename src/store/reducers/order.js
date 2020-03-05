import * as actionTypes from '../actions/actionsTypes';

export const purchaseBugerSucces = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BUGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}