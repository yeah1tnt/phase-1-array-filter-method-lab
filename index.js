// Code your solution here
function findMatching(array, name){
    const newArray = [];
    for(let i in array){
        if(array[i].toLowerCase() === name.toLowerCase()){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function fuzzyMatch(array,name){
    const newArray = [];
    for(let i  = 0; i < array.length;i++){
        if(array[i].slice(0,1).toLowerCase() === name.slice(0,1).toLowerCase()){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function matchName(array,name){
    const newArray = array.filter(array => array.name === name);
    return newArray;
}