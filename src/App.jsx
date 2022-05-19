/**
 * First TODO: Handle user input fields
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

  // way-01
  // const handleInputFields = (e) => {
  //   // console.log(e.target.name);
  //   setInputeState({
  //     ...inputState,
  //     [e.target.name]: parseInt(e.target.value),
  //   });
  // };

  // way-02
  const handleFieldA = (e) => {
    setInputeState({
      ...inputState,
      a: parseInt(e.target.value),
    });
  };
  const handleFieldB = (e) => {
    setInputeState({
      ...inputState,
      b: parseInt(e.target.value),
    });
  };

  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <h1>Result: 0</h1>

      <div>
        <p>Inputs</p>

        <input
          type="number"
          value={inputState.a}
          onChange={handleFieldA}
          name="a"
        />
        <input
          type="number"
          value={inputState.b}
          onChange={handleFieldB}
          name="b"
        />
      </div>

      <div>
        <p>Operations</p>
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>Clear</button>
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
