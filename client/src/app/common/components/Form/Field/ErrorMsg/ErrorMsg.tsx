import React from 'react';

const ErrorMsg: React.FC = (props) => {
  return (
    <>
      <span className="color-danger">{props.children}</span>
    </>
  );
};

export default ErrorMsg;
