import * as types from "./ActionTypes";
import axios from "axios";
export const signin = (payload, toast, navigate) => async (dispatch) => {
  return axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/signin`, payload)
    .then((res) => {
      dispatch({ type: types.SIGNIN_SUCCESS, payload: res.data });
      toast({
        title: res.data.msg,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      if (res.data.user.administration == "") {
        navigate("/");
      } else {
        navigate("/admin");
      }
    })
    .catch((err) => {
      dispatch({ type: types.SIGNIN_FAILURE });
      toast({
        title: err.response.data.msg,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
};
export const signup = (payload, toast) => async (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });
  return axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/signup`, payload)
    .then((res) => {
      dispatch({ type: types.SIGNUP_SUCCESS });
      toast({
        title: res.data.msg,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    })
    .catch((err) => {
      dispatch({ type: types.SIGNUP_FAILURE });
      toast({
        title: err.response.data.msg,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
};
export const logout = (toast, navigate) => async (dispatch) => {
  try {
    dispatch({ type: types.SIGNOUT_REQUEST });
    dispatch({ type: types.SIGNOUT_SUCCESS });
    toast({
      title: "Account Logout",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/");
  } catch (error) {
    dispatch({ type: types.SIGNOUT_FAILURE });
  }
};
