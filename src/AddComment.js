import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddComment extends Component {

  onCommentUpdate(field, event) {
	//console.log('onUserUpdate: ' + field + ' == '+ event.target.value);
	if (field === 'name') {
		this.setState ({name: event.target.value});
	} else if (field === 'comment') {
		this.setState ({comment: event.target.value});
	}	
  }

  addComment(event) {
	const comment = {
		name: this.state.name,
		comment : this.state.comment
	}
	this.props.dispatch( { type: "AddComment", payload: comment});

  }

  render() {
    return (
	<div style={{padding:10}}>
		<h2>Guestbook</h2>
		<input type="text" onChange={this.onCommentUpdate.bind(this, 'name')} placeholder="name" />
		<br/>
		<textarea type="text" onChange={this.onCommentUpdate.bind(this, 'comment')} placeholder="Add your comments" />
		<br/>
		<button onClick={this.addComment.bind(this)}>Add Comments</button>   	    
	</div>
    );
  }
}

export default connect()(AddComment);
