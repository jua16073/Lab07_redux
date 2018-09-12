import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import * as selectors from '../../reducers';
import Scomment from '../comment';
import './comments.css'


const comments = ({
  ids = []
}) => (
  <Fragment>
  <div className="comments">
    {
      ids.length > 0
      ? ids.map(id => <Scomment key = {id} id = {id}/>)
      : <p>No comments yet</p>
    }
    
  </div>
  </Fragment>
)

export default connect(
  (state,{id}) => ({
    ids: selectors.getPost(state,id).comments,
  }),
  undefined
)(comments);

