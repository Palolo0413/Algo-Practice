function Count(arr){
    let count=0
    for(let i=0;i<arr.length;i++){ 
    if(arr[i]!==arr[i+1]){
    count ++
    }
    }
    return count
  }

// solution 2
function countUniqueValues(array){

    if(array.length === 0){
     return 0
   }

   let map = {}

   for(let val of array){
     map[val] = (map[val] || 0) + 1
   }
  
   let vals = Object.keys(map).length
  
   return vals
}

