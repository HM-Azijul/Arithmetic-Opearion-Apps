/**
 * First TODO: Handle user input fields
 * Second TODO: Handle Operations
 * Third TODO: Handle a list of histories
 * Fourth TODO: Render history list
 * Fiveth TODO: Restore the history
 */

const App = () => {
  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <h1>Result: 0</h1>

      <div>
        <p>Inputs</p>
        <input type="number" />
        <input type="number" />
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
