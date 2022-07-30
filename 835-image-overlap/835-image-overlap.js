/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
const largestOverlap = (g1, g2) => {
    let n = g1.length, d = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (g1[i][j] == 1) d.push([i, j]);
        }
    }
    if (d.length == 0) return 0;
    let [x, y] = d[0], res = 0; // [x, y] the initial topLeft point in g1
    for (let i = -1; i < n; i++) {
        for (let j = -1; j < n; j++) { // assume [i, j] is topLeft point after moving
            let moveX = i - x, moveY = j - y;
            let t = d.map(e => [e[0] + moveX, e[1] + moveY]); // map all coordinates the same as the topLeft
            let cnt = overlap(t, g2);
            res = Math.max(res, cnt);
        }
    }
    return res;
};

const overlap = (d, g) => { // find overlap for all "1" coordinates in g
    let n = g.length, cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (g[i][j] == 1) {
                if (d.some(x => x[0] == i && x[1] == j)) cnt++;
            }
        }
    }
    return cnt;
};