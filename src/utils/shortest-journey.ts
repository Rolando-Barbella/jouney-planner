
const shortestNode = (costs:  string | number | object | any, nodesAlreadyCall: Array<string>) => {
  return Object.keys(costs).reduce((lowest: string | any, node: string ) => {
    if (lowest === null || costs[node] < costs[lowest]) {
      if (!nodesAlreadyCall.includes(node)) {
        lowest = node;
      }
    }
    return lowest;
  }, null);
};

// returns the minimum cost and path to reach finish
export const shortestJourney = (graph: { [ x: string ]: any; start?: any; }) => {
  const costs = Object.assign({ finish: Infinity }, graph.start);
  const parents: { [ key: string ]:  any } = { finish: null };

  for (let child in graph.start) {
    parents[child] = 'start';
  }

  const nodesAlreadyCall: Array<string> = [];

  let node = shortestNode(costs, nodesAlreadyCall);

  while (node) {
    let cost = costs[node];
    let children = graph[node];
    for (let n in children) {
      let newCost = cost + children[n];
      if (!costs[n]) {
        costs[n] = newCost;
        parents[n] = node;
      }
      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }
    nodesAlreadyCall.push(node);
    node = shortestNode(costs, nodesAlreadyCall);
  }
  let optimalPath: Array<string> = ['finish'];
  let parent = parents.finish;

  while (parent) {
    optimalPath.push(parent);
    parent = parents[parent];
  }

  optimalPath.reverse();
  const endOfJourney = {
    distance: costs.finish,
    path: optimalPath.splice(1, optimalPath.length -2)
  };

  return endOfJourney;
};
