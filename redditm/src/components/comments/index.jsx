import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import * as selectors from '../../reducers';
import Scomment from '../comment';


const comments = ({
  ids = []
}) => (
  <Fragment>
  <div>
    {
      ids.length > 0
      ? ids.map(id => <Scomment key = {id} id = {id}/>)
      : <li>vacio</li>
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

