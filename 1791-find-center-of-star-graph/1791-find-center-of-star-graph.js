/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
  const [[a, b], [c, d]] = edges;
    console.log([[a, b], [c, d]])
    return a === c || b === c ? c : d
};

