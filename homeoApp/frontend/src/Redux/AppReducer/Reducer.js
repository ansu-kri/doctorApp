import * as types from "./ActionTypes";
const initialState = {
  allProducts:[],
  isLoading:false,
  isError: false,
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ALLPRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.ALLPRODUCT_SUCCESS: {
      return {
        ...state,
        allProducts:payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.ALLPRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        allProducts:[],
        isError: true,
      };
    }
    default:
      return state;
  }
};
