import {combineReducers} from 'redux';

import post, * as fromPosts from './post';
import comments, * as fromComments from './comments';

const reducer = combineReducers({
  post,
  comments,
});

export default reducer;


export const getPost = (state, id) => fromPosts.getPost(state, id);

export const getPosts = (state) => fromPosts.getPosts(state);

export const getComment = (state, id) => fromComments.getComment(state, id);

