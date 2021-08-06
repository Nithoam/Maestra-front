import axios from 'axios';

import { SIGN_UP, LOG_IN, saveUserData, saveUserSignUpData } from 'src/actions/user';
import { errorSignIn, errorSignUp } from 'src/actions/errors';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().user;

      axios.post(
        'https://maestra.chrisdev.fr/api/login_check',
        {
          email,
          password,
        },
      ).then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.data.email);
        localStorage.setItem('id', response.data.data.id);
        localStorage.setItem('enabled', response.data.data.enabled);
        localStorage.setItem('role', response.data.data.role.length);
        store.dispatch(saveUserData(response.data));
      }).catch((error) => {
        store.dispatch(errorSignIn(error.response.data.message));
      });
      next(action);
      break;
    }
    case SIGN_UP: {
      const { firstname, lastname, email, password, birthdate, smoker, children } = store.getState().user;
      // smoker = smoker === "true" ? true:false;
      // children = children === "true" ? true:false;
      axios.post(
        'https://maestra.chrisdev.fr/api/register', JSON.stringify(
        {
          firstname,
          lastname,
          email,
          password,
          birthdate,
          "smoker":smoker === "true" ? true:false,
          "children":children === "true" ? true:false,
        }),
      ).then((response) => {
        store.dispatch(saveUserSignUpData(response.data));
      }).catch((error) => {
        for (const errors in error.response.data.error) {
          store.dispatch(errorSignUp(error.response.data.error[errors]));
        }
      });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
