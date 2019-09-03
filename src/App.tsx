import React, { useState } from 'react';

import Journey  from './components/Journey';
import { shortestJourney } from "./utils/shortest-journey";
import { fromAtoH, fromBtoH, fromCtoH, fromDtoH } from './types/journeyTypes'
import './App.css';

function App() {
  const [ startJourneis ] = useState(['A', 'B', 'C', 'D']);
  const [ endJourneis ]= useState(['H']);
  const [ journey, setJourney ] = useState({ start: '', end: 'H' });
  const [ showJourneyPlanner, setShowJourneyPlanner ] = useState(true);
  
  const disabledButton = Object.values(journey).every((j:string) => j !== "");

  const findShortestJourney = (journey: {[ key: string ]: string } ) => {
    let { start }: {[ key: string ]: string } = journey;

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
              <h1>Your shortest route is:</h1>
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
