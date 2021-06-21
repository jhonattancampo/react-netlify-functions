import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";


import './App.css';

function App() {
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://chellisite.netlify.app/.netlify/functions/search`;
    fetch(apiUrl)
        .then((res) => res.json())
        .then((repos) => {
          setAppState({ loading: false, repos: repos });
        });
  }, [setAppState]);
  return (
      <div className='App'>
        <div className='container'>
          <h1>My Repositories</h1>
        </div>
        <div className='repo-container'>
          {appState}
        </div>
        <footer>
          <div className='footer'>
            Built{' '}
            <span role='img' aria-label='love'>
            💚
          </span>{' '}
            with by Shedrack Akintayo
          </div>
        </footer>
      </div>
  );
}

export default App;
