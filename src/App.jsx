/**
 * DONE: Handle user input fields
 * DONE: Handle Operations
 * Third TODO: Handle a list of histories
 * Fourth TODO: Render history list
 * Fiveth TODO: Restore the history
 */
import { useState } from 'react';

function* generateId() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
const getId = generateId();
// console.log(getId.next().value);
// console.log(getId.next().value);
// console.log(getId.next().value);

const InitialInputState = {
  a: 0,
  b: 0,
};

const App = () => {
  const [inputState, setInputeState] = useState({ ...InitialInputState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);

  const handleInputFields = (e) => {
    setInputeState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleClearOps = () => {
    setInputeState({ ...InitialInputState });
    setResult(0);
  };

  const handleArithmeticOps = (operation) => {
    if (!inputState.a || !inputState.b) {
      alert('Invalid Input');
      return;
    } // add simple inputState validator

    const f = new Function(
      'operation',
      `return ${inputState.a} ${operation} ${inputState.b};`
    );
    setResult(f(operation));

    const history = {
      id: getId.next().value,
      inputs: inputState,
      operation,
      date: new Date(),
    };
    console.log(history);

    setHistories([history, ...histories]);
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
        <button onClick={() => handleArithmeticOps('%')}>%</button>

        <button onClick={handleClearOps}>Clear</button>
      </div>

      <div>
        <p>History</p>
        {histories.length === 0 ? (
          <p>
            <small>There is no history</small>
          </p>
        ) : (
          <ul>
            <li>
              <p>Operation: 10 + 20, Result: 30</p>
              <small>5/14/2022</small>
              <br />
              <button>restore</button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
