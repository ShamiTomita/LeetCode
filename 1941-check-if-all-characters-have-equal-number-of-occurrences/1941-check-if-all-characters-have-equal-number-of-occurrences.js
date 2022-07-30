/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = (s) => {
  let count = s.split('').reduce((obj, cur)=>{
    obj.hasOwnProperty(cur)?obj[cur] += 1:obj[cur] = 1
    return obj
  },{})
  return new Set(Object.values(count)).size === 1
};