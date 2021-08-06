export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const GET_USER_DATA = 'GET_USER_DATA';
export const CHANGE_SIGNUP_SELECT = 'CHANGE_SIGNUP_SELECT'
export const SAVE_USER_SIGNUP_DATA = 'SAVE_USER_SIGNUP_DATA'

export const changeUserField = (fieldValue, fieldName) => ({
  type: CHANGE_USER_FIELD,
  fieldValue,
  fieldName,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const signUp = () => ({
  type: SIGN_UP,
});


export const saveUserData = (data) => ({
  type: SAVE_USER_DATA,
  token: data.token,
  data,
});

export const saveUserSignUpData = (data) => ({
  type: SAVE_USER_SIGNUP_DATA,
  data,
});

export const getUserData = () => {
  let isLogged = false
  let email = ""
  let token = ""
  let id = "" 
  let enabled = ""
  let role = ""
  if (localStorage.getItem('email') != null) {
    email = localStorage.getItem('email');
    enabled = localStorage.getItem('enabled');
    role = localStorage.getItem('role');
    token = localStorage.getItem('token');
    id = localStorage.getItem('id');
    isLogged = true;
  }
  return ({
    type: GET_USER_DATA,
    email,
    token,
    isLogged,
    id,
    enabled,
    role,
  });
};

export const changeSignUpSelect = (value, name) => ({
  type: CHANGE_SIGNUP_SELECT,
  value,
  name,
});

export const UPDATE_USER_INFORMATION = 'UPDATE_USER_INFORMATION';

export const updateUserInformation = (user) => ({
  type: UPDATE_USER_INFORMATION,
  user,
});

export const DELETE_THIS_USER = 'DELETE_THIS_USER';

export const deleteThisUser = (user) => ({
  type: DELETE_THIS_USER,
  user,
});

export const CLEAN_STATE = 'CLEAN_STATE';

export const cleanState = () => ({
  type: CLEAN_STATE,
});

export const GET_USER_DATA_BY_ID = 'GET_USER_DATA_BY_ID';

export const getUserDataById = (id) => ({
  type: GET_USER_DATA_BY_ID,
  id,
});

export const GET_ALL_USER_DATA = 'GET_ALL_USER_DATA';

export const getAllUserData = (data) => ({
  type: GET_ALL_USER_DATA,
  data,
});

export const SET_LOADING = 'SET_LOADING';

export const setLoading = (value) => ({
  type: SET_LOADING,
  value,
});

export const SET_MESSAGE = 'SET_MESSAGE';

export const setMessage = (content, color) => ({
  type: SET_MESSAGE,
  content,
  color,
});

export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';

export const changePasswordValue = (id, oldPassword, newPassword) => ({
  type: CHANGE_PASSWORD_VALUE,
  id,
  oldPassword,
  newPassword,
});

export const CLEAN_PASSWORD_INPUT = 'CLEAN_PASSWORD_INPUT';

export const cleanPasswordInput = () => ({
  type: CLEAN_PASSWORD_INPUT,
});

export const SET_PASSWORD_MESSAGE = 'SET_PASSWORD_MESSAGE';

export const setPasswordMessage = (content, color) => ({
  type: SET_PASSWORD_MESSAGE,
  content,
  color,
});

export const CHANGE_CHECKBOX_VALUE = 'CHANGE_CHECKBOX_VALUE';

export const changeCheckboxValue = (value, name) => ({
  type: CHANGE_CHECKBOX_VALUE,
  value,
  name,
});

export const CHANGE_BURGER_STATE = 'CHANGE_BURGER_STATE';

export const changeBurgerState = (value) => ({
  type: CHANGE_BURGER_STATE,
  value,
});

export const SET_MODAL_STATUS = 'SET_MODAL_STATUS';

export const setModalStatus = (status) => ({
  type: SET_MODAL_STATUS,
  status,
});

export const FETCH_REVIEWS_BY_ID = 'FETCH_REVIEWS_BY_ID';

export const fetchReviewsById = (id) => ({
  type: FETCH_REVIEWS_BY_ID,
  id,
});

export const SAVE_USER_REVIEWS = 'SAVE_USER_REVIEWS';

export const saveUserReviews = (userReviews) => ({
  type: SAVE_USER_REVIEWS,
  userReviews,
});
