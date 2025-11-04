import React, { useState } from 'react';

const Count = () => {
  const [val, setValue] = useState(0);

  return (
    <div id="counter">
      <button onClick={() => setValue(val - 1)}>-</button>
      <input type="number" value={val} readOnly />
      <button onClick={() => setValue(val + 1)}>+</button>
    </div>
  );
};

export default Count;
