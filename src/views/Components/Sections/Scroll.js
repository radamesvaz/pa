import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', borderTop: '1px inset black', borderBottom: '1px inset black', height: '570px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;