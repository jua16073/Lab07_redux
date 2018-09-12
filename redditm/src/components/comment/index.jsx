import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import * as selectors from '../../reducers';

const sComment = ({
  id,
  body
}) => (
  <div>
    <p>{body}</p>
  </div>
)

export default connect(
  (state, {id}) => ({
    ...selectors.getComment(state, id),
  }),
  undefined,
)(sComment);