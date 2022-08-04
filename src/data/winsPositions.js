export const winsPoitions = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]

]
/**
 * 
 * @param {Array} group 
 */

export const testWin = function(group){


    let found = false;

    group = group.sort((a,b)=>a-b);

    winsPoitions.forEach(windPos=>{
        if(windPos.every(r=>group.includes(r)))
            found = true;
    })
    

    return found;
}