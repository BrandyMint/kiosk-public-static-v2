import React, { Component, PropTypes } from 'react';

class BlogPost extends Component {
  render() {
    const {
      date,
      title,
      text,
      prev,
      next
    } = this.props;

    return (
      <div className="b-page__content__inner b-page__content__inner_content">
        <article className="post">
          <div className="post__date">{ date }</div>
          <h1 className="post__title">{ title }</h1>
          <div className="post__content">
            <div className="post__text b-text">
              { text }
            </div>
          </div>
        </article>
        <nav className="postnav">
          <div className="postnav__inner">
            { prev }
            { next }
          </div>
        </nav>
      </div>
    );
  }
}

BlogPost.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired
};

export default BlogPost;
