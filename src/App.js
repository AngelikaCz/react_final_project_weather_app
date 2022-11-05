import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This projects was coded by Angelika Czerwińska and it is open-sourced on{" "}
        <a
          href="https://github.com/AngelikaCz/react_final_project_weather_app"
          target="_blank"
          rel="noreferrer"
          className="GitHubLink"
        >
          GitHub
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
