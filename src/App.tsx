import React, {  useState } from 'react'

import { dijkstra } from "./utils/shortest-journey";
import './App.css';

interface ISomeObject {
  start: Object;
  A: Object;
  B: Object;
  C: Object;
  D: Object;
  finish: Object;
}
// From A to D
const route: { [key: string]: number | object } = {
  start: { A: 1 },
  A: { C: 4, B: 2 },
  B: { A: 8, D: 1 },
  C: { D: 6, finish: 3 },
  D: { A: 4, finish: 1 },
  finish: {}
};

// console.log(dijkstra(route));

function App() {
  const startJourneis: Array<string> = ['A', 'B', 'C', 'D'];
  const endJourneis: Array<string> = ['E', 'F', 'G', 'J'];

  const [ journey, setJourney ] = useState({ start: '', end: '' });
  // const [ startJourney, setStartJourney ] = useState(null);
  // const [ atoBState, setatoBState ] =  useState(route);
  return (
    <div className="App">
      <h2>Start</h2>
      <section className="journey-container">
        <div data-testid="start-options">
          {
            startJourneis.map(start => (
              <p
                key={start}
                className={journey.start === start ? "active-circle" : ""}
                onClick={() => setJourney({...journey, start })}
              >
                {start}
              </p>
            ))
          }
        </div>
        <div data-testid="end-options">
          {
            endJourneis.map(end => (
              <p
                key={end}
                className={journey.end === end ? "active-circle" : ""}
                onClick={() => setJourney({...journey, end })}
              >
                {end}
              </p>
            ))
          }
        </div>
      </section>
    </div>
  );
}

export default App;
