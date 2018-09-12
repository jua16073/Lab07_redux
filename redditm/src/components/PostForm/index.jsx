import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid-v4';

import * as actions from '../../actions';

class form extends React.Component{
  render () {
    const {onSubmit} = this.props;

    return (
      <Fragment>
        <title>Titulo</title> <br/>
        Titulo
        <input type="text"
        ref = {node => {this.title = node; }} />
        <br/>
        <title>Contenido</title> <br/>
        Contenido
        <input type="text"
        ref = {node => {this.content = node;} } />
        <br/>
        <br/>
        <button onClick={
          () => {
            onSubmit(
              this.title.value,
              this.content.value
            );

            this.title.value = "";
            this.content.value = "";
          }
        } >Nuevo Post</button>
      </Fragment>
    )
  }
}

export default connect(
 undefined,
 dispatch => ({
   onSubmit(title, body){
     dispatch(actions.addPost(uuid(), title, body, 0,[]));
   }
 }) 
)(form);