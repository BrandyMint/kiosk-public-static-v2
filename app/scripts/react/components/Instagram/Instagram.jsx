import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import InstagramEntries from './InstagramEntries';

class Instagram extends Component {
  render() {
    const { entries, hashtag, isError, isLoading, profileUrl } = this.props;
    const instagramClasses = classNames({
      'Instagram': true,
      'Instagram--error': isError,
      'Instagram--loading': isLoading,
    });

    return (
      <div className={instagramClasses}>
        {isError &&
          <div className="Instagram-message">
            Ошибка при загрузке фотографий в компоненте Instagram
          </div>
        }
        {isLoading &&
          <div className="Instagram-message">
            <div className="Instagram-loader" />
          </div>
        }
        {!isError && !isLoading &&
          <div className="Instagram-content">
            {hashtag &&
              <h2 className="Instagram-hashtag b-item-list__title">
                <a
                  className="Instagram-hashtagLink"
                  href={profileUrl}
                  rel="nofollow"
                  target="_blank"
                >
                  {hashtag}
                </a>
              </h2>
            }
            <InstagramEntries {...this.props} />
          </div>
        }
      </div>
    );
  }
}

Instagram.propTypes = {
  entries: PropTypes.array.isRequired,
  hashtag: PropTypes.string,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  profileUrl: PropTypes.string,
};

export default Instagram;