import Immutable from 'immutable';
import createReducer from '../utils/createReducer';
import * as actionTypes from '../constants/actionTypes';

const initialState = Immutable.fromJS({
  popups: []
});

export default createReducer(initialState, {
  [actionTypes.POPUP_OPEN](state, { style, props }) {
    return state.mergeDeep({
      popups: [{ style, props }]
    });
  },
  [actionTypes.POPUP_CLOSE](state, { style }) {
    return state.merge({
      popups: state.getIn(['popups']).filter((popup) => (
        popup.get('style') !== style
      ))
    });
  }
});