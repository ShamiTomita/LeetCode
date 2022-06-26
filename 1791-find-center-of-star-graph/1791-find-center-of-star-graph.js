/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let fqCounter = {}
    for(let edge of edges){
        for(let i = 0; i < edge.length; i++){
            let node = edge[i];
            fqCounter[node] = (fqCounter[node] || 0) + 1
        }
    }
    for(let key in fqCounter){
        if(fqCounter[key] > 1) return key
    }
    console.log(fqCounter)
};