import { connect } from 'react-redux';

import Connection from 'src/components/Connection';
import { changeUserField, logIn, signUp, changeSignUpSelect, getUserData } from '../../actions/user';

const mapStateToProps = (state) => ({
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  email: state.user.email,
  password: state.user.password,
  birthdate: state.user.birthdate,
  smoker: state.user.smoker,
  children: state.user.children,
  isLogged: state.user.isLogged,
  isSignUp: state.user.isSignUp,
  messageSignIn: state.user.messageSignIn,
  messageSignUp: state.user.messageSignUp,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => {
    dispatch(getUserData());
  },
  changeField: (fieldValue, fieldName) => {
    dispatch(changeUserField(fieldValue, fieldName));
  },
  changeSelect: function (value, name) {
    dispatch(changeSignUpSelect(value, name));
  },
  handleLogin: () => {
    dispatch(logIn());
  },
  handleSignUp: () => {
    dispatch(signUp());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Connection);
