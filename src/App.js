import { useState } from 'react';
import './App.css';
import CARDS from "./all-lotrtcg-cards.json";
import { Grid2 } from '@mui/material';

function App() {
  const [deckSize, setDeckSize] = useState(30);
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
      rd[i] = FP_CARDS[n];
    }
    setFellowship(rd);
    // SHADOW
    rd = [];
    for (let i=0; i<deckSize; i++) {
      let n = Math.floor(Math.random() * SH_CARDS.length);
      rd[i] = SH_CARDS[n];
    }
    setShadow(rd);
    // SITES
    rd = [];
    for (let i=1; i<10; i++) {
      const SI_N_CARDS = SI_CARDS.filter(x => x['Signet/Site#'] === `${i}`);
      console.log(SI_N_CARDS);
      
      let n = Math.floor(Math.random() * SI_N_CARDS.length);
      rd[i] = SI_N_CARDS[n];
    }
    setSites(rd);
  }

  function getRow(r) {
    return (
      <li>
        <span class="tooltip">
          {r.Name}
          <span>
            <img class="ttimage" src={`https://i.lotrtcgpc.net/decipher/${r.Imagefile}.jpg`} />
          </span>
        </span>
      </li>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Grid2 container>
          <Grid2 item md={4} sm={6} xs={12} className="deck-column">
            <h2>Fellowship:</h2> 
            <ul>
            {fellowship.map(x => getRow(x))}
            </ul>
          </Grid2>
          <Grid2 item md={4} sm={6} xs={12} className="deck-column">
            <h2>Shadow:</h2>
            <ul>{shadow.map(x => getRow(x))}</ul>
          </Grid2>
          <Grid2 item md={4} sm={6} xs={12} className="deck-column">
            <h2>Sites:</h2>
            <ul>{sites.map(x => getRow(x))}</ul>
          </Grid2>
        </Grid2>
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
