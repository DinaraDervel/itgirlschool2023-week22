import './App.css';
import Card from './components/Card/Card';
import data from './data/data.json'

function App() {
  return (
    <div className="App">
      {data.map((hero) => <Card name={hero.name} />)}
    </div>
  );
}

export default App;
