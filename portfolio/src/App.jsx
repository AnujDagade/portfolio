import './App.css';

document.title = "Portfolio"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="Octocat.png" className="App-logo" alt="logo" /> */}
        <p className='warning'>
          {/* GitHub Codespaces <span className="heart">♥️</span> React */}
          Site is under construction
        </p>
        About Myself
        <p className="small">
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Hi I am Anuj currently pursuing my masters in Computer Science.
        </p>
        <p className='small'>
          I am working on becoming a full stack developer.
        </p>
        <p>
          <a
            className="App-link"
            href="www.linkedin.com/in/anuj-dagade"
            target="_blank"
            rel="noopener noreferrer"
          >
            My LinkedIn
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
