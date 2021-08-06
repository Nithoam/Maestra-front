import { connect } from 'react-redux';

import { changeInputValue, changeMessageValue, sendMessage } from 'src/actions/contact';

import Contact from 'src/components/Contact';

const mapStateToProps = (state) => ({
  name: state.contact.name,
  email: state.contact.email,
  object: state.contact.object,
  message: state.contact.message,
  messageErrorContact: state.contact.messageErrorContact,
  messageSend: state.contact.messageSend,
  isMessageSend: state.contact.isMessageSend,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeInputValue(value, name));
  },
  setMessage: (message) => {
    dispatch(changeMessageValue(message));
  },
  handleSendMessage: () => {
    dispatch(sendMessage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
