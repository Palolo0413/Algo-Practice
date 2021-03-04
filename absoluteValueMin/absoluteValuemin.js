//solution 1
function absoluteValuesSumMin(ints) {
    const vals = [];
  
    ints.forEach(int => {
      const sum = ints.reduce((accum, next) => {
        return accum + Math.abs(next  - int);
      }, 0);
  
      vals.push(sum);
    });
  
    // console.log(vals);
    const lowest = Math.min(...vals);
    return ints[vals.indexOf(lowest)];
  }
//solution 2
function absoluteValuesSumMin (arr){
    const isEven= arr.length % 2 ===0

    return isEven ? arr[arr.length/2 - 1]:arr[Math.floor(arr.length/2)]
}