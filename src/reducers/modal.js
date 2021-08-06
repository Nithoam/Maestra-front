import { CLOSE_MODAL } from "../actions";

export const initialState = {
  isOpen: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default reducer;
