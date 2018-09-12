import {connect} from 'react-redux';
import React, {Fragment} from 'react';
import uuid from 'uuid-v4';

import * as actions from '../../actions';
import * as selectors from '../../reducers';
import './postS.css';
import Comments from '../comments';

const post = ({
  id,
  title,
  body,
  karma,
  onSubmit,
  onUpvote,
  onDownvote
}) => (
  <div className="post">
    <h1>{title}</h1>
    <p>{body}</p>
    <input type="text" ref= {node => {this.comentario = node;}} />
    <button onClick =  {
      () => {
        onSubmit(
          this.comentario.value,
        );
        this.comentario.value = "";
      }
    } >New Comment</button>

    <button onClick = {
      () => {
        onUpvote();
      }
      } >up</button>

      <button onClick = {
      () => {
        onDownvote();
      }
      } >down</button>
    <div className= "karma">
      {karma}
    </div>
    <Comments id = {id}/>
  </div>
);

export default connect(
  (state, {id}) => ({
    ...selectors.getPost(state, id),
  }),
  (dispatch, {id}) =>({
    onSubmit(body){
      dispatch(actions.addComment(uuid(),id, body));
    },
    onUpvote(){
      dispatch(actions.upvote(id));
    },
    onDownvote(){
      dispatch(actions.downvote(id));
    }
  })
)(post);
