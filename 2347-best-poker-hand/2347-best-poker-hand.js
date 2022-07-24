/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
  if (new Set(suits).size === 1) return "Flush";
  const counts = ranks.reduce((acc, cur) => (acc[cur]++, acc), new Uint8Array(14));
  const max = Math.max(...counts);
  return max > 2 ? "Three of a Kind" : max > 1 ? "Pair" : "High Card";
};