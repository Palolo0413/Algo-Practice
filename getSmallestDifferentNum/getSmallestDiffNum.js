
//solution 1
function getDifferentNumber(arr) {
    arr.sort((a,b)=>a-b)
    let smallest=0
    if (arr[0]>smallest){
        return smallest
      }
    for (let i=0;i<arr.length;i++){
        if (arr[i+1]-arr[i]!==1){
          return arr[i]+1
        }
    }
  }
