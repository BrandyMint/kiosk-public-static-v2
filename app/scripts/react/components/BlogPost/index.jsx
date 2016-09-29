import React from 'react';
import { camelizeKeys } from 'humps';
import BlogPost from './BlogPost';

function BlogPostContainer(props) {
  return <BlogPost {...camelizeKeys(props)} />;
}

export default BlogPostContainer;
