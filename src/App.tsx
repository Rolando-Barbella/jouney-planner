import React, { useState, useEffect } from 'react';
import Journey  from './components/Journey';
import { shortestJourney } from "./utils/shortest-journey";
import './App.css';

const fromAtoH: { [key: string]: number | object } = {
  start: { A: 1 },
  A: { C: 2 },
  C: { D: 1 },
  D: { F: 1 },
  F: { G: 3 },
  G: { H: 4 },
  H: { finish: 1 },
  finish: {}
};

const fromBtoH: { [key: string]: number | object } = {
  start: { B: 1 },
  A: { C: 4, B: 2 },
  B: { E: 7, D: 4 },
  C: { D: 6, },
  D: { G: 2, C: 4 },
  E: { H: 10 },
  G: { H: 4 },
  F: { G: 2 },
  H: { finish: 1 },
  finish: {}
};

const fromCtoH: { [key: string]: number | object } = {
  start: { C: 1 },
  C: { D: 1, F: 4 },
  D: { F: 1 },
  F: { G: 3 },
  G: { H: 4 },
  H: { finish: 1 },
  finish: {}
};

const fromDtoH: { [key: string]: number | object } = {
  start: { D: 1 },
  D: { F: 1, G: 2 },
  F: { G: 3 },
  G: { H: 4 },
  H: { finish: 1 },
  finish: {}
};

function App() {
  const [ startJourneis ] = useState(['A', 'B', 'C', 'D']);
  const [ endJourneis ]= useState(['H']);
  const [ journey, setJourney ] = useState({ start: '', end: 'H' });
  const [ showJourneyPlanner, setShowJourneyPlanner ] = useState(true);
  
  const disabledButton = Object.values(journey).every(j => j !== "");

  const findShortestJourney = (journey:{[ key: string ]: string } ) => {
    let { start } = journey;
    if (start === "A") {
      return shortestJourney(fromAtoH);
    }

    if (start === "B") {
      return shortestJourney(fromBtoH);
    }

    if (start === "D") {
      return shortestJourney(fromDtoH);
    }

    if (start === "C") {
      return shortestJourney(fromCtoH);
    }
    return { distance: 0, path: [] };
  }

  const { path } = findShortestJourney(journey);

  return (
    <div className="App">
      <header>
        <h1>Journey Planner</h1>
      </header>
      <section className="journey-planner-container">
        {showJourneyPlanner ?
          <>
            <div className="wrapper-journey-planner">
              <div>
                <h2>Start</h2>
                <Journey 
                  dataTestId="start-options"
                  journeis={startJourneis}
                  journeyName={journey.start}
                  onClick={(start: string) => setJourney({ ...journey, start })} 
                />
              </div>
              <div className="end-wrapper">
                <br/>
                <Journey 
                  dataTestId="end-options"
                  journeis={endJourneis}
                  journeyName={journey.end}
                />
              </div>
            </div>
            <div className="button-container">
              <button
                data-testid="search-journey"
                disabled={!disabledButton}
                style={{ background: !disabledButton? 'grey': "" }}
                onClick={() => { 
                  setShowJourneyPlanner(false);
                  findShortestJourney(journey);
                }}
              >
                Search
              </button>
            </div>
          </> : (
            <div className="wrapper-result-journey">
              <Journey 
                dataTestId="result-journey"
                verticalRow="result-journey"
                journeis={path}
              />
              <div className="button-container">
                <button 
                  data-testid="reset-journey"
                  onClick={() => { 
                    setShowJourneyPlanner(true);
                    setJourney({ start: '', end: 'H' });
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          )
        }
      </section>
    </div>
  );
}

export default App;
