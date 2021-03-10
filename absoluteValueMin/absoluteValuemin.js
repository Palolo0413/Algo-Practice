//solution 1
function absoluteValuesSumMin(arr) {
    const result = [];
  
    arr.forEach(ele => {
      const sum = arr.reduce((accum, next) => {
        return accum + Math.abs(next  - ele);
      }, 0);
  
      result.push(sum);
    });

    const lowest = Math.min(...result);
    return arr[result.indexOf(lowest)];
  }
//solution 2
function absoluteValuesSumMin (arr){
    const isEven= arr.length % 2 ===0

    return isEven ? arr[arr.length/2 - 1]:arr[Math.floor(arr.length/2)]
}