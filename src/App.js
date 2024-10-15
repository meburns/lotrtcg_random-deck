import { useState } from 'react';
import './App.css';
import CARDS from "./all-lotrtcg-cards.json";
const CARDS_TOTAL = 3496;

function App() {
  const [deckSize, setDeckSize] = useState(0);
  const [fellowship, setFellowship] = useState([]);
  const [shadow, setShadow] = useState([]);
  const [sites, setSites] = useState([]);

  function randomizeDeck() {
    let rd = [];
    const FP_CARDS = CARDS.filter(x => x.Side === "Free");
    const SH_CARDS = CARDS.filter(x => x.Side === "Shadow");
    const SI_CARDS = CARDS.filter(x => x.Side === "Site");
    // FELLOWSHIP
    for (let i=0; i<deckSize; i++) {
      let n = Math.floor(Math.random() * FP_CARDS.length);
      // Load card
      // Check if card is desired type
      // Pick card
      rd[i] = JSON.stringify(FP_CARDS[n].Name);
    }
    setFellowship(rd);
    // SHADOW
    rd = [];
    for (let i=0; i<deckSize; i++) {
      let n = Math.floor(Math.random() * SH_CARDS.length);
      // Load card
      // Check if card is desired type
      // Pick card
      rd[i] = JSON.stringify(SH_CARDS[n].Name);
    }
    setShadow(rd);
    // SITES
    rd = [];
    for (let i=0; i<9; i++) {
      let n = Math.floor(Math.random() * SI_CARDS.length);
      // Load card
      // Check if card is desired type
      // Pick card
      rd[i] = JSON.stringify(SI_CARDS[n].Name);
    }
    setSites(rd);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Fellowship: {fellowship.map(x => <p>{x}</p>)}
        </div>
        <div>
          Shadow: {shadow.map(x => <p>{x}</p>)}
        </div>
        <div>
          Sites: {sites.map(x => <p>{x}</p>)}
        </div>
        <p>
          Deck Size: <input type="number" value={deckSize} onChange={(e)=>{setDeckSize(e.target.value)}}></input>
        </p>
        <button onClick={randomizeDeck}>
          Randomize Deck
        </button>
      </header>
    </div>
  );
}

export default App;
