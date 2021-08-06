import { connect } from 'react-redux';

import App from 'src/components/App';

import { getUserData } from 'src/actions/user';

const mapStateToProps = ( state ) => ({
    pillsData: state.pills.pillsData,
    reviewsData: state.reviews.reviewsData,
    isLogged: state.user.isLogged,
    email: state.user.email,
    isOpen: state.modal.isOpen,
    enabled: state.user.enabled,
    role: state.user.role,
});

const mapDispatchToProps = (dispatch) => ({
  getUserData: () => {
    dispatch(getUserData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
