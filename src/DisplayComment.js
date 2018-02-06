import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from "./Comment"
class DisplayComment extends Component {

  render() {
    return (
	<div style={{padding:20}}>
		<h2>List of Comments received</h2>
		{this.props.commentList.map((comments) => 
			<Comment name={comments.name} comment={comments.comment} /> )}
	</div>
    );
  }
}

const mapStateToProps = state => ({
	commentList: state.commentList
});

export default connect(mapStateToProps)(DisplayComment);