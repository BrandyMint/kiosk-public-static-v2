import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class InstagramEntries extends Component {
  render() {
    const { entries, profileUrl } = this.props;
    const classes = classNames({
      'Instagram-entries': true,
      'Instagram-entries--empty': entries.length === 0,
    });

    return (
      <div className={classes}>
        {entries.length
          ? entries.map((entry) => (
              <a
                className="Instagram-entry"
                href={entry.thumbnail_url}
                key={entry.id}
                rel="nofollow"
                target="_blank"
              >
                <img src={entry.thumbnail_src} />
              </a>
            ))
          : <span>Instagram не содержит фотографий</span>
        }
      </div>
    );
  }
}

InstagramEntries.propTypes = {
  entries: PropTypes.array.isRequired,
  profileUrl: PropTypes.string,
};

export default InstagramEntries;
