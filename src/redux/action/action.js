import * as types from "../actionType";

export const addItemToCart = (items) => ({
  type: types.ADD_ITEM_TO_CART,
  payload: items,
});
export const removeItemFromCart = (items) => ({
  type: types.REMOVE_ITEM_FROM_CART,
  payload: items,
});
