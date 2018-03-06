import { productlistsuccess, productlistfailure } from "../actionCreators/product"
import { PRODUCT_LIST, ADD_ITEM_SUCCESS, DELETE_ITEM, EDIT_ITEM_SUCCESS } from "../actionTypes/product"
import { put, takeLatest } from "redux-saga/effects";

//getproduct
function* productlist() {
    let url = "http://localhost:4000/products"
    try {

        let product = yield fetch(url).then(result => result.json());

        yield put(productlistsuccess(product));
    }
    catch (error) {
        yield put(productlistfailure(error));
    }
}
//add item
function* additemsuccess(action) {

    console.log(action.item);
    try {
        let product = yield fetch("http://localhost:4000/products", {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.item)
        }).then(result => result.json());
        yield put(productlistsuccess(product));
    }
    catch (error) {
        yield put(productlistfailure(error));
    }
}
//edit item
function* edititemsuccess(action) {

    console.log(action.item);
    try {
        let product = yield fetch(`http://localhost:4000/products/${action.item.id}`, {
            method: 'PUT',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.item)
        }).then(result => result.json());
        yield put(productlistsuccess(product));
    }
    catch (error) {
        yield put(productlistfailure(error));
    }
}
//delete item
function* deleteItem(action) {

    try {
        let product = yield fetch(`http://localhost:4000/products/${action.item}`, {
            method: 'DELETE'
        }).then(result => result.json());
        yield put(productlistsuccess(product));
    }
    catch (error) {
        yield put(productlistfailure(error));
    }
}
export function* getWatcher() {
    yield [takeLatest(PRODUCT_LIST, productlist),
    takeLatest(ADD_ITEM_SUCCESS, additemsuccess),
    takeLatest(EDIT_ITEM_SUCCESS, edititemsuccess),
    takeLatest(DELETE_ITEM, deleteItem)];
}