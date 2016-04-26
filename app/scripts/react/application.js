import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as reducers from './reducers';

// Bootstraping serverside data
let data = {};
if (global.gon.__data) {
  const { design } = global.gon.__data;

  data = {
    design: {
      current: design,
      currentSaved: design,
      unsavedFields: {},
      isSaving: false
    }
  };
}

global.Kiosk = {
  version: '0.0.209',
};

// Unless we have no one common component, we will be pass <Provider /> global redux
// instance
global.redux = createRedux(reducers, data);
