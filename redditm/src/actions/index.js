import * as types from '../types';

export const addPost = (
id,
title,
body,
karma,
comments,
) => ({
  type: types.POST_ADDED,
  payload: {
    id,
    title,
    body,
    karma,
    comments,
  }
});

export const addComment = (
  id,
  body
) => ({
  type: types.COMMENT_ADDED,
  payload:{
    id,
    body,
  }
});

export const upvote = (
id,
) => ({
  type: types.UPVOTED,
  payload: id,
});

export const downvote = (
id,
) => ({
  type: types.DOWNVOTED,
  payload: id,
});