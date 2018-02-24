import React from "react";
import "./AdvanceBtn.css"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const AdvanceBtn = props => (
  <span className="advance-btn" {...props}>
    ✗
  </span>
);

export default AdvanceBtn;