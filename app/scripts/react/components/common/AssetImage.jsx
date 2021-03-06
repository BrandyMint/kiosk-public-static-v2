/*global gon */
import React, { PropTypes } from 'react';

function AssetImage(props) {
  return (
    <img {...props}
      src={`//${gon.asset_host}/${props.src}`}
    />
  );
}

AssetImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default AssetImage;
