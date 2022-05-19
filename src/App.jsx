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

  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <h1>Result: 0</h1>

      <div>
        <p>Inputs</p>
        <input type="number" value={inputState.a} />
        <input type="number" value={inputState.b} />
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
