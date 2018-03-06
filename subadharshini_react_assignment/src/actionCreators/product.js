import { PRODUCT_LIST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE, ADD_ITEM, EDIT_ITEM, DELETE_ITEM, ADD_ITEM_SUCCESS, EDIT_ITEM_SUCCESS, NEW_EDIT_ITEM, PAGINATION } from "../actionTypes/product"

export function productlist() {
    return {
        type: PRODUCT_LIST
    }
}

export function productlistsuccess(product) {
    return {
        type: PRODUCT_LIST_SUCCESS,
        product
    }
}

export function productlistfailure(error) {
    return {
        type: PRODUCT_LIST_FAILURE,
        error
    }
}
export function additem(item) {
    console.log(item)
    return {
        type: ADD_ITEM,
        item
    }
}
export function additemsuccess(item) {
    console.log("adding", item)
    return {
        type: ADD_ITEM_SUCCESS,
        item
    }
}

export function edititem(item) {
    return {
        type: EDIT_ITEM,
        item
    }
}
export function edititemsuccess(item) {
    return {
        type: EDIT_ITEM_SUCCESS,
        item
    }
}
export function newedititem(item) {
    return {
        type: NEW_EDIT_ITEM,
        item
    }
}
export function deleteItem(item) {
    console.log(item);
    return {
        type: DELETE_ITEM,
        item
    }
}
export function pagination(currentpage) {
    return {
        type: PAGINATION,
        currentpage
    }
}