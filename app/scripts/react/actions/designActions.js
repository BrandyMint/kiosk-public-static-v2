import NoticeService from '../services/Notice';
import buildParams from '../utils/buildParams';
import * as apiRoutes from '../../routes/api';
import * as actionTypes from '../constants/actionTypes';

export function changeOption(name, value) {
  return {
    name,
    value,
    type: actionTypes.DESIGN_CHANGE_OPTION,
  };
}

export function changeImage(name, file) {
  return {
    name,
    file,
    type: actionTypes.DESIGN_CHANGE_ATTACHMENT_OPTION,
  };
}

export function saveChanges() {
  return (dispatch, getState) => {
    const current = getState().design.get('current').toJS();
    const ignoredKeys = ['logoUrl', 'pageBgUrl'];
    const data = Object.keys(current).reduce(function (previous, key) {
      if (ignoredKeys.indexOf(key) === -1) previous[key] = current[key];
      return previous;
    }, {});

    // FIXME: Use redux-actions with promise field
    dispatch({ type: actionTypes.DESIGN_SAVE });

    const formData = new FormData();
    const add = function add(key, value) {
      formData.append(key, value === null ? '' : value);
    }

    for(let key in data) {
      if(data.hasOwnProperty(key)) {
        buildParams(key, data[key], false, add);
      }
    }

    $.ajax({
      url: apiRoutes.designSettings(),
      method: 'PUT',
      data: formData,
      cache: false,
      contentType: false,
      processData: false
    }).then((design) => {
        dispatch({
          type: actionTypes.DESIGN_SAVE_SUCCESS,
          design
        });
      })
      .fail((xhr) => {
        dispatch({ type: actionTypes.DESIGN_SAVE_FAILURE });
        NoticeService.errorResponse(xhr);
      });
  }
}