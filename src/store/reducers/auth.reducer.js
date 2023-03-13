import { authConstant } from "../constants";

const initialState = {
  message: "",
  categories: [],
  products: [],
  errors: [],
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstant.USER_LOGIN_REQUEST:
    case authConstant.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authConstant.USER_LOGIN_SUCCESS:
    case authConstant.USER_REGISTER_SUCCESS:
    case authConstant.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case authConstant.GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case authConstant.GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case authConstant.USER_LOGIN_FAILURE:
    case authConstant.USER_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.err,
      };
    case authConstant.CLEAR_MESSAGES:
      return {
        ...state,
        loading: false,
        message: "",
      };
    case authConstant.CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: [],
      };
    default:
      return state;
  }
};

export default authReducer;
