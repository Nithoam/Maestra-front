import {
  CHANGE_USER_FIELD,
  LOG_OUT,
  SAVE_USER_DATA,
  SAVE_USER_SIGNUP_DATA,
  GET_USER_DATA,
  CHANGE_SIGNUP_SELECT,
  SIGN_UP,
  CLEAN_STATE,
  GET_ALL_USER_DATA,
  SET_LOADING,
  SET_MESSAGE,
  CLEAN_PASSWORD_INPUT,
  SET_PASSWORD_MESSAGE,
  CHANGE_CHECKBOX_VALUE,
  CHANGE_BURGER_STATE,
  SET_MODAL_STATUS,
  SAVE_USER_REVIEWS,
} from "../actions/user";

import { ERROR_SIGNIN, ERROR_SIGNUP } from "src/actions/errors";

const initialState = {
  loading: false,
  picture: "",
  firstname: "",
  lastname: "",
  id: "",
  enabled: "",
  role: "",
  email: "",
  password: "",
  birthdate: "",
  smoker: true,
  children: true,
  isLogged: false,
  isSignUp: false,
  messageSignIn: "",
  messageSignUp: "",
  message: {
    content: '',
    color: '',
  },
  passwordMessage: {
    content: '',
    color: '',
  },
  checkLastPassword: "",
  userReviews: [],
  newPassword: "",
  confirmNewPassword: "",
  modalOn: false,
  token: '',
  burgerOpen: false,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_REVIEWS:
      return {
        ...state,
        userReviews: action.userReviews,
      };
    case SET_MODAL_STATUS:
      return {
        ...state,
        modalOn: action.status,
      };
    case CHANGE_BURGER_STATE:
      return {
        ...state,
        burgerOpen: action.value,
      };
    case CHANGE_CHECKBOX_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CLEAN_PASSWORD_INPUT:
      return {
        ...state,
        checkLastPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      };
    case SET_PASSWORD_MESSAGE:
      return {
        ...state,
        passwordMessage: {
          content: action.content,
          color: action.color,
        },
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: {
          content: action.content,
          color: action.color,
        },
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.value,
      };
    case GET_ALL_USER_DATA:
      return {
        ...state,
        firstname: action.data.firstname,
        lastname: action.data.lastname,
        id: action.data.id,
        email: action.data.email,
        birthdate: action.data.birthdate,
        smoker: action.data.smoker,
        children: action.data.children,
        picture: action.data.picture,
      };
    case CHANGE_USER_FIELD:
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    case CHANGE_SIGNUP_SELECT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        isLogged: true,
        token: action.token,
        messageSignIn: "",
        email: '',
        password: '',
        id: action.data.data.id,
        firstname: action.data.data.firstname,
        role: action.data.data.role.length,
      };
    case SAVE_USER_SIGNUP_DATA:
      return {
        ...state,
        isSignUp: true,
        messageSignUp: "",
      };
    case SIGN_UP:
      return {
        ...state,
        password: "",
        token: null,
        smoker: true,
        children: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        isSignUp: false,
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        birthdate: "",
        token: '',
        smoker: true,
        children: true,
        message: "",
        passwordMessage: "",
      };
    case GET_USER_DATA:
      return {
        ...state,
        token: action.token,
        isLogged: action.isLogged,
        id: action.id,
        enabled: action.enabled,
        role: action.role,
      };
    case ERROR_SIGNIN:
      return {
        ...state,
        messageSignIn: "Identifiants incorrects",
        password: "",
      };
    case ERROR_SIGNUP:
      return {
        ...state,
        messageSignUp: action.messageSignUp,
        password: "",
      };
    case CLEAN_STATE:
      return {
        ...state,
        firstname: "",
        lastname: "",
        id: "",
        email: "",
        password: "",
        birthdate: "",
        smoker: true,
        children: true,
        isLogged: false,
        isSignUp: false,
        token: null,
        messageSignIn: "",
        messageSignUp: "",
      };
    default:
      return { ...state };
  }
};

export default userReducer;
