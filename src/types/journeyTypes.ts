interface fromToJourney { 
  [ key: string ]: number | object 
}

export const fromAtoH: fromToJourney = {
  start: { A: 1 },
  A: { C: 2 },
  C: { D: 1 },
  D: { F: 1 },
  F: { G: 3 },
  G: { H: 4 },
  H: { finish: 1 },
  finish: {},
};

export const fromBtoH: fromToJourney = {
  start: { B: 1 },
  A: { C: 4, B: 2 },
  B: { E: 7, D: 4 },
  C: { D: 6, },
  D: { G: 2, C: 4 },
  E: { H: 10 },
  G: { H: 4 },
  F: { G: 2 },
  H: { finish: 1 },
  finish: {},
};

export const fromCtoH: fromToJourney = {
  start: { C: 1 },
  C: { D: 1, F: 4 },
  D: { F: 1 },
  F: { G: 3 },
  G: { H: 4 },
  H: { finish: 1 },
  finish: {},
};

export const fromDtoH: fromToJourney = {
  start: { D: 1 },
  D: { F: 1, G: 2 },
  F: { G: 3 },
  G: { H: 4 },
  H: { finish: 1 },
  finish: {},
};