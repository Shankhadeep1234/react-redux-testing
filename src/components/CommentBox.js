import React, { Component } from "react";
import { connect } from "react-redux";

import { saveComment } from "actions/index";

class CommentBox extends Component {
  state = {
    comment: "",
  };

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    //call an action creator and save the comment
    this.props.saveComment(this.state.comment);

    this.setState({ comment: "" }); //to empty-out the textarea
  };

  //component got render and we check that user is logged in or not
  componentDidMount() {
    this.shouldNavigateAway();
  }

  //component got update and we check that user is logged in or not
  componentDidUpdate() {
    this.shouldNavigateAway();
  }

  shouldNavigateAway() {
    if (!this.props.auth) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

function mapDispatchToProps(dispatch) {
  return {
    saveComment: (comment) => dispatch(saveComment(comment)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
