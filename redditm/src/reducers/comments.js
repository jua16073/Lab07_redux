import {combineReducers} from 'redux';

import * as types from '../types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.COMMENT_ADDED:{
      const {id} = action.payload;
      return {
        ...state,
        [id]: action.payload,
      };
    }
  
    default: return state;
  }
};


export const getComment = (state, id) => state.byId[id];

const comments = combineReducers({
  byId,
});

export default comments;