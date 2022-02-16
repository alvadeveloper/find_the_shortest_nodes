const shortestNodes = require('./shortestPathHelper')
const allNodes = require('./allPathsHelper')

allNodes.Graph(8);
allNodes.addEdge(0, 1);
allNodes.addEdge(0, 3);
allNodes.addEdge(0, 7);
allNodes.addEdge(1, 2);
allNodes.addEdge(1, 3);
allNodes.addEdge(2, 5);
allNodes.addEdge(2, 3);
allNodes.addEdge(3, 4);
allNodes.addEdge(4, 5);
allNodes.addEdge(4, 7);
allNodes.addEdge(5, 6);
allNodes.addEdge(6, 7);

let s = 0;
let d = 7;



const graph = shortestNodes.buildGraphFromEdges([
    { source: '0', target: '1' },
    { source: '0', target: '3' },
    { source: '0', target: '7' },
    { source: '1', target: '2' },
    { source: '1', target: '3' },
    { source: '2', target: '5' },
    { source: '2', target: '3' },
    { source: '3', target: '4' },
    { source: '4', target: '5' },
    { source: '4', target: '7' },
    { source: '5', target: '6' },
    { source: '6', target: '7' }
]);

console.log('all paths are')
allNodes.printAllPaths(s, d)
console.log('This shortest Path is ', shortestNodes.findPath('0','7', graph))