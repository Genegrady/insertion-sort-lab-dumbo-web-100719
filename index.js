function findMinAndRemove(array){
    let min = array[0];
    let minI = 0;
    for(let i = 0; i < array.length; i++){
        let cE = array[i];
        if(cE < min){
            min = cE;
            minI = i;
        }
    }
    array.splice(minI, 1)
    return min
}

function insertionSort(array){
    let newMin;
    let sorted = []
    while(array.length != 0){
        newMin = findMinAndRemove(array)
        sorted.push(newMin)
    }
    return sorted;
}
