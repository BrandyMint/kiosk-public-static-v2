import React from 'react';
import { camelizeKeys } from 'humps';
import ContentPage from './ContentPage';

function ContentPageContainer(props) {
  return <ContentPage {...camelizeKeys(props)} />;
}

export default ContentPageContainer;
