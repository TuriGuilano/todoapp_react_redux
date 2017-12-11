import React from 'react';

const Action = (props) => (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        Chose something random for me!
      </button>
    </div>
  );

export default Action;