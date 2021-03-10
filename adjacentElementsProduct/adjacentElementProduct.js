function adjacentElementsProduct (arr){
    let max=arr[0]*arr[1]
    for ( let i=0; i<arr.length-1; i++){
            max=Math.max(max, arr[i]*arr[i+1])
    }
    return max
}