import axios from "axios";
import {
  SEND_MESSAGE
} from "src/actions/contact";
import { errorContact } from 'src/actions/errors';
import { messageIsSend } from 'src/actions/contact';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const { name, email, object, message } = store.getState().contact;
      axios
        .post("https://maestra.chrisdev.fr/api/contact/form", {
          name,
          email,
          object,
          message
        })
        .then((response) => {
          store.dispatch(messageIsSend(response.data));
        })
        .catch((error) => {
          for (const errors in error.response.data) {
            store.dispatch(errorContact(error.response.data[errors]));
          }
        })
      next(action);
      break;
    default:
      next(action);
  }
};

export default contactMiddleware;
