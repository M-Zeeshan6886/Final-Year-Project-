import { authConstant } from "./../constants/index";
import axios from "axios";

export const userLogin = (body) => {
  return async (dispatch) => {
    dispatch({ type: authConstant.USER_LOGIN_REQUEST });
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_ROOT}/user/login`,
        body
      );
      const { data } = result;
      dispatch({
        type: authConstant.USER_LOGIN_SUCCESS,
        payload: "Login Successfully!",
      });
      localStorage.setItem("userToken", data.token);
    } catch (error) {
      dispatch({
        type: authConstant.USER_LOGIN_FAILURE,
        payload: { err: error.response.data.message },
      });
    }
  };
};

export const userRegister = (body) => {
  return async (dispatch) => {
    dispatch({ type: authConstant.USER_REGISTER_REQUEST });
    try {
      await axios.post(`${process.env.REACT_APP_ROOT}/user/register`, body);
      dispatch({
        type: authConstant.USER_REGISTER_SUCCESS,
        payload: "New USER Created Successfully!",
      });
    } catch (error) {
      dispatch({
        type: authConstant.USER_REGISTER_FAILURE,
        payload: { err: error.response.data.message },
      });
    }
  };
};

export const getAllCategory = (body) => {
  return async (dispatch) => {
    dispatch({ type: authConstant.GET_ALL_CATEGORY_REQUEST });
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_ROOT}/category`,
        body
      );
      const { data } = result;
      dispatch({
        type: authConstant.GET_ALL_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: authConstant.GET_ALL_CATEGORY_FAILURE,
        payload: { err: error.response.data.message },
      });
    }
  };
};

export const getAllProduct = () => {
  return async (dispatch) => {
    dispatch({ type: authConstant.GET_ALL_PRODUCT_REQUEST });
    try {
      const token = localStorage.getItem("userToken");
      const result = await axios.get(`${process.env.REACT_APP_ROOT}/product`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "", //the token is a variable which holds the token
        },
      });
      const { data } = result;
      dispatch({
        type: authConstant.GET_ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: authConstant.GET_ALL_PRODUCT_FAILURE,
        payload: { err: error.response.data.message },
      });
    }
  };
};

export const addCategory = (body) => {
  return async (dispatch) => {
    dispatch({ type: authConstant.USER_REGISTER_REQUEST });
    try {
      await axios.post(`${process.env.REACT_APP_ROOT}/category`, body);
      dispatch({
        type: authConstant.ADD_CATEGORY_SUCCESS,
        payload: "Created Successfully!",
      });
      dispatch(getAllCategory());
    } catch (error) {
      dispatch({
        type: authConstant.USER_REGISTER_FAILURE,
        payload: { err: error.response.data.message },
      });
    }
  };
};

export const addPost = (body) => {
  return async (dispatch) => {
    dispatch({ type: authConstant.USER_REGISTER_REQUEST });
    try {
      const token = localStorage.getItem("userToken");
      await axios.post(`${process.env.REACT_APP_ROOT}/product`, body, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "", //the token is a variable which holds the token
        },
      });
      dispatch({
        type: authConstant.USER_REGISTER_SUCCESS,
        payload: "Created Successfully!",
      });
    } catch (error) {
      dispatch({
        type: authConstant.USER_REGISTER_FAILURE,
        payload: { err: error.response.data.message },
      });
    }
  };
};

export const Logout = () => {
  return async (dispatch) => {
    dispatch({ type: authConstant.USER_REGISTER_REQUEST });
    try {
      localStorage.clear();
      dispatch({
        type: authConstant.USER_REGISTER_SUCCESS,
        payload: "Logout Successfully!",
      });
    } catch (error) {
      dispatch({
        type: authConstant.USER_REGISTER_FAILURE,
        payload: { err: error.response.data.message },
      });
    }
  };
};

export const ResetPassword = (body) => {
  return async (dispatch) => {
    dispatch({ type: authConstant.USER_REGISTER_REQUEST });
    try {
      const token = localStorage.getItem("userToken");
      await axios.post(
        `${process.env.REACT_APP_ROOT}/user/resetPassword`,
        body,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "", //the token is a variable which holds the token
          },
        }
      );
      dispatch({
        type: authConstant.USER_REGISTER_SUCCESS,
        payload: "Please check your mail",
      });
    } catch (error) {
      dispatch({
        type: authConstant.USER_REGISTER_FAILURE,
        payload: { err: error.response.data.message },
      });
    }
  };
};

export const UpdatePassword = (body) => {
  return async (dispatch) => {
    dispatch({ type: authConstant.USER_REGISTER_REQUEST });
    try {
      const token = localStorage.getItem("userToken");
      await axios.post(
        `${process.env.REACT_APP_ROOT}/user/forgetPassword`,
        body,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "", //the token is a variable which holds the token
          },
        }
      );
      dispatch({
        type: authConstant.USER_REGISTER_SUCCESS,
        payload: "Password Updated Successfully",
      });
    } catch (error) {
      dispatch({
        type: authConstant.USER_REGISTER_FAILURE,
        payload: { err: error.response.data.message },
      });
    }
  };
};

export const getDisccsuion = (body) => {
  return async (dispatch) => {
    dispatch({ type: authConstant.GET_DIS_REQUEST });
    try {
      const token = localStorage.getItem("userToken");
      const result = await axios.get(
        `${process.env.REACT_APP_ROOT}/product/discussion?name=${body}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "", //the token is a variable which holds the token
          },
        }
      );
      const { data } = result;
      dispatch({
        type: authConstant.GET_DIS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: authConstant.GET_DIS_FAILURE,
        payload: { err: error.response.data.message },
      });
    }
  };
};
// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: authConstant.CLEAR_ERRORS });
};

// Clearing Messages
export const clearMessages = () => async (dispatch) => {
  dispatch({ type: authConstant.CLEAR_MESSAGES });
};
