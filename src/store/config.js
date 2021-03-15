import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default function configureStore(history, initialState, rootReducer) {
  const composeEnhancers = composeWithDevTools({});

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk)),
  );

  return { store };
}
