import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      </header>
      <main>
        <Dictionary defaultKeyword="word" />
      </main>
      <footer className="App-footer">
        <small>
            Coded by Nastasia Pollas and is <a href="https://github.com/550tealeaves/dictionary-project" target="blank">open source on Github</a> and <a href="https://sad-torvalds-d5dda8.netlify.app/" target="blank">hosted by Netlify</a>
        </small>
      </footer>
      </div>
    </div>
  );
}


