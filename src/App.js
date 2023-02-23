import './App.css';
import Header from './Header';
import List from './List';
import allCountryScores from "./scores"; 

function App() {
  return (
    <div className="App">
      <Header />
      <List data={allCountryScores}/>
    </div>
  );
}

export default App;
