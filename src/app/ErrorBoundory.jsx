import React, { Component } from "react";

export class ErrorBoundory extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
//example
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error) {
    console.log("error", error);
  }
  render() {
    return <div>ErrorBoundory</div>;
  }
}

export default ErrorBoundory;
