import React from 'react';
import { camelizeKeys } from 'humps';
import Cabinet from './Cabinet';

function CabinetContainer(props) {
  return <Cabinet {...camelizeKeys(props)} />;
}

export default CabinetContainer;
