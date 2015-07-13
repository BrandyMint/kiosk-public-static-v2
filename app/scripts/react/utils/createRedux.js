import {
  createRedux,
  createDispatcher,
  composeStores
} from 'redux';
import persistence from './persistence';
import * as reducers from '../reducers';

// function promiseMiddleware(api, getState) {
//   return next =>
//     function _r(action) {
//       if (action && _.isFunction(action.then)) {
//         return action.then(_r);
//       }

//       if (_.isFunction(action)) {
//         return _r(action(api, getState));
//       }

//       return next(action);
//     };
// }

function storageMiddleware(getState) {
  return (next) => {
    return (action) => {
      console.log(next(action));
      console.log(getState().design.get('current').toJS());
      return next(action);
    }
  }
}

export default function(initialState) {
  const dispatcher = createDispatcher(
    composeStores(reducers),
    getState => [storageMiddleware(getState)]
  );
  const redux = createRedux(dispatcher, initialState);

  return redux;
}