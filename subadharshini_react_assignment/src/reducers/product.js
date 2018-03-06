import { PRODUCT_LIST, PRODUCT_LIST_SUCCESS, ADD_ITEM, EDIT_ITEM, NEW_EDIT_ITEM, PAGINATION } from "../actionTypes/product"

export default (prevstate = {
    product: [], isLoading: false, pageOfItems: [], addItem: {}, editItem: {}, currentpage: 1,
    productPerPage: 10
}, action) => {
    switch (action.type) {
        case PRODUCT_LIST:
            return {
                ...prevstate,
                isLoading: true
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                ...prevstate,
                isLoading: false,
                product: action.product
            }
        case ADD_ITEM:
            return {
                addItem: { ...prevstate.addItem, ...action.item }
            }
        case EDIT_ITEM:
            return {
                editItem: action.item
            }
        case NEW_EDIT_ITEM:
            return {
                editItem: { ...prevstate.editItem, ...action.item }
            }
        case PAGINATION:
            return {
                ...prevstate,
                currentpage: action.currentpage
            }
        default:
            return prevstate
    }
} 