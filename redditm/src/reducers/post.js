import {combineReducers} from 'redux';

import * as types from '../types';

const byId = (state = {}, action) => {
  switch (action.type) {
    
    case types.POST_ADDED: {
      const {id} = action.payload;
      return {
        ...state,
        [id]: action.payload,
      };
    }

    case types.UPVOTED: {
      const id = action.payload;
      const post = state[id];
      const {karma} = post;
      return {
        ...state,
        [id]: {
          ...post,
          karma: karma+1,
        },
      }
    }

    case types.DOWNVOTED: {
      const id = action.payload;
      const post = state[id];
      const {karma} = post;
      return {
        ...state,
        [id]: {
          ...post,
          karma: karma-1,
        },
      }
    }

    case types.COMMENT_ADDED: {
      const {idP} = action.payload;
      const post = state[idP];
      const {comments} = post;
      const {id} = action.payload;
      return {
        ...state,
        [idP]: {
          ...post,
          comments : [
            ...comments,
            id,
          ],
        }
      };
    }

    default: return state;
  }
};

const order = (state = [], action) => {
  switch(action.type) {
    case types.POST_ADDED:{
      const {id} = action.payload;
      return [
        ...state,
        id,
      ];
    }
    default: return state;
  }
};


const post = combineReducers({
  byId,
  order,
});

export const getPost = (state,id) => state.byId[id]; 


export const getPosts = (state) => state.order.map(
  id => getPost(state, id),
);

export default post;

