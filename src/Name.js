import React from "react";

const Name = (props) => {
  return (
    <span
      onClick={props.handleChange}
      key={props.key}
      className={props.name.sex === "f" ? "name-list-pink" : "name-list-blue"}
    >
      {props.name.name}
    </span>
  );
};

export default Name;
