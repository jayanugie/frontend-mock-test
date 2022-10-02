import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Click the links below:
        </p>
        <a
          className="App-link"
          href="/register"
        >
          Register
        </a>
        <a
          className="App-link"
          href="/login"
        >
          Login
        </a>
        <a
          className="App-link"
          href="/dashboard"
        >
          Product List
        </a>
      </header>
    </div>
  );
}

export default App;
