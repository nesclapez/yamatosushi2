import React from "react";
import PropTypes from "prop-types";

import fullName from "./fullName";

/**
 *
 * @param {firstName} FirstName
 * @param {lastName} lastName
 */
export default function Greetings({ firstName, lastName }) {
  return <p>Hello {fullName({ firstName, lastName })}</p>;
}

Greetings.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
};

Greetings.defaultProps = {
  lastName: "Martin",
};
