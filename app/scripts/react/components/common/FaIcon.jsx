import React, { PropTypes } from 'react';
import classNames from 'classnames';

function FaIcon({ name, addClass, ...opts }) {
  let extraClasses = name.split(' ').map((c) => `fa-${c}`);

  return <i className={classNames('fa', extraClasses, addClass)} {...opts} />;
}

FaIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FaIcon;
