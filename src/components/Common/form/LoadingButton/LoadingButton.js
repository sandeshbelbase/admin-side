import React from "react";

function LoadingButton(props) {
  const { loading } = props;
  if (loading) {
    return (
      <button {...props} disabled>
        <span
          className="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>{" "}
        Loading...
      </button>
    );
  } else {
    return <button {...props}>{props.children}</button>;
  }
}

export default LoadingButton;
