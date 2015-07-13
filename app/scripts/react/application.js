// import { createRedux } from 'redux';
import createRedux from './utils/createRedux';
// import * as reducers from './reducers';

// Bootstraping serverside data
let data = {};
let cacheData = JSON.parse(localStorage.getItem('__data'));
let finalData = {
  ...cacheData,
  design: {
    ...cacheData.design,
    currentSaved: global.gon.__data.design
  }
}

// if (global.gon.__data) {
//   const { design } = global.gon.__data;

//   data = {
//     design: {
//       current: design,
//       currentSaved: design,
//       unsavedFields: {},
//       isSaving: false
//     },
//     popup: {
//       popups: [{
//         style: 'DesignSettings'
//       }]
//     }
//   };
// }

// Unless we have no one common component, we will be pass <Provider /> global redux
// instance
global.redux = createRedux(finalData);