import axios from "axios";
import {
CLOSE_MODAL
} from "src/actions/index";

const indexMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CLOSE_MODAL:
          localStorage.setItem('isOpen', true);
          next(action);
      break;
   default:
         next(action); // On oublie pas le default case sinon tu va avoir des soucis
   break;
  }
}
export default indexMiddleware;