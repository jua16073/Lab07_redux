import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import Post from '../post';
import * as selectors from '../../reducers';

const Posts = ({ posts = [] }) => (
  <Fragment>
    <div>
      {
        posts.length > 0 
      ? posts.map(({id}) => <Post key={id} id={id} />)  
          : <li>no hay posts</li>
      }
    </div>
  </Fragment>
);

export default connect(
  state => ({
    posts: selectors.getPosts(state),
  }),
  undefined
)(Posts);

//