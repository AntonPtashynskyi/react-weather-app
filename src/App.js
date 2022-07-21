import "./App.css";
import { ResultList, SearchLocation } from "./components/index";

function App() {
  // weatherApi();

  return (
    <div className="wrapper">
      <SearchLocation />
      <ResultList />
    </div>
  );
}

export default App;
