// import logo from './logo./svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="heading">Inventory Management App</h1>

      <div className="items">
        <span className="spans">Books:</span>
        <button className="addBook">
          +
        </button>
        <button className="remBook">
          -
        </button>
        <span className="totalBooks">1</span>
        </div>

        <div className="items">
        <span className="spans">Pens:</span>
        <button className="addPen">
          +
        </button>
        <button className="remPen">
          -
        </button>
        <span className="totalPens">1</span>
        </div>

        <div className="items">
        <span className="spans">Notebooks:</span>
        <button className="addNotebook">
          +
        </button>
        <button className="remNotebook">
          -
        </button>
        <span className="totalNotebooks">1</span>
        </div>

        <div className="items">
        <span className="spans">InkPens:</span>
        <button className="addInkpen">
          +
        </button>
        <button className="remInkpen">
          -
        </button>
        <span className="totalInkpens">1</span>
        </div>

        <div className="total">1</div>
    </div>
  );
}

export default App;













