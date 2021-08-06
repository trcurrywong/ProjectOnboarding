function findLowHigh(arr){
    var low;
    var high;
    let sorted = arr.sort((a,b) => a - b);
    low = sorted[0];
    high = sorted[sorted.length-1];
}