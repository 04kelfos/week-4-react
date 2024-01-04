import "./styles.css";
import SearchBar from "./SearchBar.js";
export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar />
      <p>
        This has been coded by Kelsey Foster and is open-sourced on
        <a href="https://github.com/04kelfos/week-4-react"> GitHub</a>{" "}
      </p>
    </div>
  );
}
