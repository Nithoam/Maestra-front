import { connect } from 'react-redux';

import Header from 'src/components/Header';
import { logOut, changeBurgerState } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  burgerOpen: state.user.burgerOpen,
  role: state.user.role,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    localStorage.clear();
    dispatch(logOut());
  },
  burger: (value) => {
    dispatch(changeBurgerState(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
