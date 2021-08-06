import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import pillsDataMiddleware from 'src/middlewares/pillsData';
import reviewsDataMiddleware from 'src/middlewares/reviewsData';
import userMiddleware from 'src/middlewares/user';
import indexMiddleware from 'src/middlewares/index';
import contactMiddleware from 'src/middlewares/contact';
import auth from 'src/middlewares/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(pillsDataMiddleware, reviewsDataMiddleware, auth, userMiddleware, indexMiddleware, contactMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
