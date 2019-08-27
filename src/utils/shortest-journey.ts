
const lowestCostNode = (costs:  string | number | object | any, processed: Array<string>) => {
  return Object.keys(costs).reduce((lowest: string | any, node: string) => {
    if (lowest === null || costs[node] < costs[lowest]) {
      if (!processed.includes(node)) {
        lowest = node;
      }
    }
    return lowest;
  }, null);
};

// function that returns the minimum cost and path to reach Finish
export const dijkstra = (graph: { [ x: string ]: any; start?: any; }) => {
  // track lowest cost to reach each node
  const costs = Object.assign({ finish: Infinity }, graph.start);
  // track paths
  const parents: { [ key: string ]:  any } = { finish: null };

  for (let child in graph.start) {
    parents[child] = 'start';
  }

  // track nodes that have already been processed
  const processed: Array<string> = [];

  let node = lowestCostNode(costs, processed);

  
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
    processed.push(node);
    node = lowestCostNode(costs, processed);
  }
  let optimalPath = ['finish'];
  let parent = parents.finish;

  while (parent) {
    optimalPath.push(parent);
    parent = parents[parent];
  }

  optimalPath.reverse();
  const results = {
    distance: costs.finish,
    path: optimalPath
  };

  return results;
};

// console.log(Object.keys(route))

// let arr = ["start", "A", "B", "D", "E", "finish"].length
// ["start", "A", "B", "D", "e", "finish"].splice(1,arr -2)