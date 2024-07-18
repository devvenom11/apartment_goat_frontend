import React from "react";

const SecondaryButton = ({ children, classNames, onClick }) => {
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};
export default SecondaryButton;
