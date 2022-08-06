export enum ProductActionsType{
  GET_ALL="[Product] Get All Products",
  GET_SELECTED_PRODUCTS="[Product] Get Selected Products",
  GET_AVAILABLE_PRODUCTS="[Product] Get Available Products",
  SEARCH_PRODUCTS="[Product] SEARCH Products",
  NEW_PRODUCT="[Product] New Products",
  SELECT_PRODUCT="[Product] Select Products",
  EDIT_PRODUCT="[Product] Edit Products",
  DELETE_PRODUCT="[Product] Delete Products",

}

export interface ActionEvent {
  type:ProductActionsType,
  payload?:any //les paramettre : peut etre n'importe quel (string  , numbre)

}
export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T>{
  dataState?:DataStateEnum,
  data?:T,
  errorMessage?:String
}
