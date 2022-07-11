import './App.css';
import brainLogo from './brainlogo.png';

function Card({cardName}) {
  return (<h3>{cardName}</h3>);
}

const records = [
  {
      "id": 1,
      "title": "Card",
      "content": "Olala Contento Uno..."
  },
  {
      "id": 2,
      "title": "Card2",
      "content": "Olala Contento Due..."
  },
  {
      "id": 3,
      "title": "Card3",
      "content": "Olala Contento Tree..."
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {records.map(current => <Card key={current.id} cardName={current.title} />)}
        <img src={brainLogo} className="App-logo" alt="logo" />        
      </header>
    </div>
  );
}

export default App;
