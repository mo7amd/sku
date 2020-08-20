import { createStore, compose } from 'redux'

export interface User {
    id: number
    first_name: string
    last_name: string
    email: string
    cc_type: string
    currency: string
}
export interface Product {
    name: string
    cost: number
}

export interface AppRootState  {
    usersList: Array<User>,
    productsList: Array<Array<Product>>
    currentUser: User
}

const defaultState: AppRootState = {
    usersList: [],
    productsList: [],
    currentUser: null,
}

export enum AppActionType {
    AddItemsList = "ADD_ITEM_LIST",
    ViewItem = "VIEW_ITEM",
    AddProduct = "ADD_PRODUCT",
    DeleteProduct = "DELETE_PRODUCT",
    EditProduct = "EDIT_PRODUCT",

}

interface AppAction {
    type: AppActionType,
    payload?: any,
}

function AppReducer(state: AppRootState = defaultState, action: AppAction): AppRootState {
    switch(action.type) {
        case AppActionType.AddItemsList: {
            return {...state, usersList: (action.payload as User[])} as AppRootState
        }
        case AppActionType.ViewItem: {
            const userId: number = action.payload as number
            return {...state, currentUser: state.usersList[userId]} as AppRootState
        }
        case AppActionType.AddProduct: {
            const id: number = action.payload.id
            const product: Product = action.payload.product
            const newProductList: Array<Product[]> = [...state.productsList]
            newProductList[id] = newProductList[id] ? [...newProductList[id], product] : [product]
            // newProductList[id] = [product]
            return {...state, productsList: newProductList} as AppRootState
        }
        case AppActionType.DeleteProduct: {
            const id: number = action.payload.id
            const productId: number = action.payload.productId
            const newProductList: Array<Product[]> = [...state.productsList]
            delete newProductList[id][productId]
            return {...state, productsList: newProductList} as AppRootState 
        }
        case AppActionType.EditProduct: {
            const id: number = action.payload.id
            const productId: number = action.payload.productId
            const product: Product = action.payload.product
            const newProductList: Array<Product[]> = [...state.productsList]
            newProductList[id][productId] = product
            return {...state, productsList: newProductList} as AppRootState
        }
    }
    return state;
}

/* tslint:disable */
const composeEnhancers = (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose) as typeof compose
/* tslint:enable */
export const store = createStore(AppReducer, composeEnhancers())