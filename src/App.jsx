/**
 * DONE: Handle user input fields
 * DONE: Handle Operations
 * DONE: Handle a list of histories
 * DONE: Render history list
 * DONE: Restore the history
 */
import { useState } from 'react';
import './App.css';

function* generateId() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
const getId = generateId();

const InitialInputState = {
  a: 0,
  b: 0,
};

const App = () => {
  const [inputState, setInputeState] = useState({ ...InitialInputState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoredHistory, setRestoredHistory] = useState(null);

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
    const result = f(operation);
    setResult(result);

    const historyItem = {
      id: getId.next().value,
      inputs: { ...inputState },
      operation,
      result,
      date: new Date(),
    };
    // console.log(history);

    setHistories([historyItem, ...histories]);
  };

  const handleRestoreBtn = (historyItem) => {
    setInputeState({ ...historyItem.inputs });
    setResult(historyItem.result);
    setRestoredHistory(historyItem);
  };

  return (
    <div className="container">
      <div className="app">
        <h1>Result: {result}</h1>

        <div>
          <h3>Inputs</h3>

          <div className="input-box">
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
        </div>

        <div className="operation-wrap">
          <h3>Operations</h3>

          <div className="btn-wrap">
            <button className="btn" onClick={() => handleArithmeticOps('+')}>
              +
            </button>
            <button className="btn" onClick={() => handleArithmeticOps('-')}>
              -
            </button>
            <button className="btn" onClick={() => handleArithmeticOps('*')}>
              *
            </button>
            <button className="btn" onClick={() => handleArithmeticOps('/')}>
              /
            </button>
            <button className="btn" onClick={() => handleArithmeticOps('%')}>
              %
            </button>
          </div>

          <button className="btn" onClick={handleClearOps}>
            Clear
          </button>
        </div>

        <div className="history-wrap">
          <h3>History</h3>
          {histories.length === 0 ? (
            <p>
              <small>There is no history</small>
            </p>
          ) : (
            <ul>
              {histories.map((historyItem) => (
                <li key={historyItem.id}>
                  {/* <p>Operation: 10 + 20, Result: 30</p> */}
                  <p>
                    Operation: {historyItem.inputs.a} {historyItem.operation}{' '}
                    {historyItem.inputs.b}, Result: {historyItem.result}
                  </p>
                  <small>
                    {historyItem.date.toLocaleDateString()}{' '}
                    {historyItem.date.toLocaleTimeString()}
                  </small>
                  <br />
                  <button
                    className="btn"
                    onClick={() => handleRestoreBtn(historyItem)}
                    disabled={
                      restoredHistory != null &&
                      restoredHistory.id == historyItem.id
                    }
                  >
                    restore
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
