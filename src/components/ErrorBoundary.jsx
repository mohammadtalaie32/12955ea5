import { Alert } from "@mui/material";
import React from "react";
import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Alert severity="error">
          Something went wrong. Please refresh the page.
        </Alert>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary