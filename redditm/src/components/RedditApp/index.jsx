import React, { Fragment } from 'react';

import './App.css';
import PostForm from '../PostForm';
import Posts from '../Posts';


const RedditApp = () => (
  <Fragment>
    <div className= "App">
      <PostForm/>
      <Posts/>
    </div>
  </Fragment>
);

export default RedditApp;