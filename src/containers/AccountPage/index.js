import { connect } from 'react-redux';

import AccountPage from 'src/components/AccountPage';

import { changeUserField, updateUserInformation, deleteThisUser, getUserDataById, changePasswordValue, setPasswordMessage, changeCheckboxValue, setModalStatus, fetchReviewsById } from 'src/actions/user';
import { deleteThisReview } from 'src/actions/reviews';

const mapStateToProps = (state) => ({
  user: state.user,
  userDataLoading: state.user.loading,
  userReviews: state.user.userReviews,
  message: state.user.message,
  passwordMessage: state.user.passwordMessage,
  checkLastPassword: state.user.checkLastPassword,
  newPassword: state.user.newPassword,
  confirmNewPassword: state.user.confirmNewPassword,
  modalOn: state.user.modalOn,
  deleteMessage: state.reviews.deleteMessage,
  enabled: state.user.enabled,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserReview: (id) => {
    dispatch(fetchReviewsById(id));
  },
  deleteReview: (id, user) => {
    dispatch(deleteThisReview(id, user));
  },
  changeField: (fieldValue, fieldName) => {
    dispatch(changeUserField(fieldValue, fieldName));
  },
  changePassword: (id, oldPassword, newPassword) => {
    dispatch(changePasswordValue(id, oldPassword, newPassword));
  },
  changeValue: (newUser) => {
    dispatch(updateUserInformation(newUser));
  },
  deleteAccount: (user) => {
    dispatch(deleteThisUser(user));
  },
  fetchUserData: (id) => {
    dispatch(getUserDataById(id));
  },
  newPasswordMessage: (message) => {
    dispatch(setPasswordMessage(message));
  },
  changeCheckbox: (checked, name) => {
    dispatch(changeCheckboxValue(checked, name));
  },
  setModal: (status) => {
    dispatch(setModalStatus(status));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
