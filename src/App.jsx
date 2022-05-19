/**
 * DONE: Handle user input fields
 * Second TODO: Handle Operations
 * Third TODO: Handle a list of histories
 * Fourth TODO: Render history list
 * Fiveth TODO: Restore the history
 */
import { useState } from 'react';

const InitialInputState = {
  a: 0,
  b: 0,
};

const App = () => {
  const [inputState, setInputeState] = useState({ ...InitialInputState });
  const [result, setResult] = useState(0);

  const handleInputFields = (e) => {
    setInputeState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleClearOps = () => {
    setInputeState({ ...InitialInputState });
  };

  const handleArithmeticOps = (operation) => {
    const f = new Function(
      'operation',
      `return ${inputState.a} ${operation} ${inputState.b};`
    );
    // console.log(f);
    // console.log(f(operation));

    setResult(f(operation));
  };

  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <h1>Result: {result}</h1>

      <div>
        <p>Inputs</p>

        <input
          type="number"
          value={inputState.a}
          onChange={handleInputFields}
          name="a"
        />
        <input
          type="number"
          value={inputState.b}
          onChange={handleInputFields}
          name="b"
        />
      </div>

      <div>
        <p>Operations</p>

        <button onClick={() => handleArithmeticOps('+')}>+</button>
        <button onClick={() => handleArithmeticOps('-')}>-</button>
        <button onClick={() => handleArithmeticOps('*')}>*</button>
        <button onClick={() => handleArithmeticOps('/')}>/</button>

        <button onClick={handleClearOps}>Clear</button>
      </div>

      <div>
        <p>History</p>
        <p>
          <small>There is no history</small>
        </p>
      </div>
    </div>
  );
};

export default App;
