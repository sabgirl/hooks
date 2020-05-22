import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState("");


  function handleNumberChange(e) {
    setCount(Number(e.target.value));
  }

  return (
    <div>
         <input
          type="number"
          value={count}
          name="counter"
          onChange={handleNumberChange}
        /> 
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}


export default Counter