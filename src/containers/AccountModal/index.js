import { connect } from 'react-redux';

import Modal from 'src/components/AccountModal';

import { changeUserField, updateUserInformation, deleteThisUser, getUserDataById, changePasswordValue, setPasswordMessage, changeCheckboxValue, setModalStatus } from 'src/actions/user';

const mapStateToProps = (state) => ({
  passwordMessage: state.user.passwordMessage,
  checkLastPassword: state.user.checkLastPassword,
  newPassword: state.user.newPassword,
  confirmNewPassword: state.user.confirmNewPassword,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeField: (fieldValue, fieldName) => {
    dispatch(changeUserField(fieldValue, fieldName));
  },
  changePassword: (id, oldPassword, newPassword) => {
    dispatch(changePasswordValue(id, oldPassword, newPassword));
  },
  newPasswordMessage: (content, color) => {
    dispatch(setPasswordMessage(content, color));
  },
  setModal: (status) => {
    dispatch(setModalStatus(status));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
