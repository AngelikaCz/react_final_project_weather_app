import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Warsaw" />
      <footer>
        This projects was coded by{" "}
        <a
          href="https://www.linkedin.com/in/angelika-czerwinska/"
          target="_blank"
          rel="noreferrer"
          className="linkedinLink"
          title="LinkedIn Link"
        >
          {" "}
          Angelika Czerwińska
        </a>{" "}
        and it is open-sourced on{" "}
        <a
          href="https://github.com/AngelikaCz/react_final_project_weather_app"
          target="_blank"
          rel="noreferrer"
          className="GitHubLink"
          title="GitHub Link"
        >
          GitHub
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
