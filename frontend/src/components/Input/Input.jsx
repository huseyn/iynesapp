import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} />;
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  placeholder: "Axtar..",
};

export default Input;
