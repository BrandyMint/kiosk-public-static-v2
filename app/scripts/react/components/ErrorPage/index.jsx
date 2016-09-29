import React from 'react';
import { camelizeKeys } from 'humps';
import ErrorPage from './ErrorPage';

function ErrorPageContainter(props) {
  return <ErrorPage {...camelizeKeys(props)} />;
}

export default ErrorPageContainter;

