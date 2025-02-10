import { GetApi } from "../../hooks/Api";
import * as types from "./ActionTypes";
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: types.ALLPRODUCT_REQUEST });
    const apiPayload = {
      url: `${process.env.REACT_APP_BACKEND_URL}/product`,
    };
    const data = await GetApi(apiPayload);

    dispatch({ type: types.ALLPRODUCT_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: types.ALLPRODUCT_FAILURE });
  }
};

export {};
