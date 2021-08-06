import { CHANGE_INPUT_VALUE, CHANGE_MESSAGE_VALUE, SEND_MESSAGE, MESSAGE_IS_SEND } from 'src/actions/contact';
import { ERROR_CONTACT } from '../actions/errors';

export const initialState = {
  name:'',
  email: '',
  object: '',
  message: '',
  messageErrorContact: '',
  messageSend: '',
  isMessageSend: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_MESSAGE_VALUE:
      return {
        ...state,
        message: action.message,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        // name:'',
        // email: '',
        // object: '',
        // message: '',
        messageErrorContact: '',
      }
    case MESSAGE_IS_SEND:
      return {
        ...state,
        name:'',
        email: '',
        object: '',
        message: '',
        isMessageSend: true,
        messageSend: "Votre message a bien été envoyé",
        messageErrorContact: '',
      }
    case ERROR_CONTACT:
      return {
        ...state,
        messageErrorContact: action.messageErrorContact,
      };
    default:
      return state;
  }
};

export default reducer;
