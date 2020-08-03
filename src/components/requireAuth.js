import React, { Component } from "react";
import { connect } from "react-redux";

export default (ChildComponent) => {
  class ComposedComponent extends Component {
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
      return <ChildComponent {...this.props} />; //here {...this.props will pass all the props to our nested component}
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
