import { combineReducers } from 'redux';

import pillsReducer from './pills';
import userReducer from './user';
import reviewsReducer from './reviews';
import contactReducer from './contact';
import modalReducer from './modal';

const rootReducer = combineReducers({
  pills: pillsReducer,
  user: userReducer,
  reviews: reviewsReducer,
  contact: contactReducer,
  modal: modalReducer,
});

export default rootReducer;
