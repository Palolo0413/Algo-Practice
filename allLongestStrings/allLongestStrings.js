function longestStrings (arr){
    let maxLength=1
    for (let i=0;i<arr.length;i++){
        maxLength=Math.max(maxLength,arr[i].length)
    }
    let result=arr.filter((ele)=> ele.length===maxLength)
    return result

}