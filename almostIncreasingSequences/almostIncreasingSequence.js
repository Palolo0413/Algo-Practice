function almostIncreasingSequence (arr){
    let count=0
    for (let i=0;i<arr.length;i++){
        (arr[i+1]<arr[i])? count++:count
    }
    return (count<=1)? true:false
}