/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common = []
    let index = 0
    let commonSwitch = false
    //we are looking for the common prefix, that means our first string will contain the maximum number of characters 
    if(strs.length === 1) common.push(strs[0][0])
    for(let a = 0; a < strs.length; a++){
        strs[a] = strs[a].split('')
     }
    for (let i = 0; i < strs[0].length; i++){
        //now we iterate over the actual items 
        for (let j = 1; j < strs.length; j++){
            console.log(strs[0][index], strs[j][index])
            console.log(strs[j], j)
            if(strs[0][index] === strs[j][index]){
                commonSwitch = true; 
                console.log("its a match!")
            }else{
                commonSwitch = false;
                console.log("no match!")
                break;
            }
        }
        if(commonSwitch === true) common.push(strs[0][index]);
        if(commonSwitch === false) break;
        //continue on 
        index++
        commonSwitch = false;
        console.log("Next letter!", index)
    }
    common = common.join('').toString()
    return common
};