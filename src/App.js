import "./App.css";
import FetchApi from "./components/FetchApi";
import SearchApi from "./components/SearchApi";

function App() {
  return (
    <div>
      <div>Changes made</div>
      <FetchApi />
      <br />
      <SearchApi />
      <div>Noble change</div>
    </div>
  );
}

export default App;
