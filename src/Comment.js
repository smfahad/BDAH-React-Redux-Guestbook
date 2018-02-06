import React, { Component } from 'react';
import './index.css';
class Comment extends Component {

  render() {
    return (
	    <div>
			<div className='commentBox'>
				Name: {this.props.name}
				<br/>
				Comments: {this.props.comment}
			</div>
			<br />
		</div>
    );
  }
}


export default Comment;