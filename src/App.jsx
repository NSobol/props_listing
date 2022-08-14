import "./App.css";
import Listing from "./components/Listing.jsx";
import data from "./data/etsy.json";

function App() {
   return (
    <div className="app">
      <Listing items={data} />
    </div>
  );
}

export default App;
