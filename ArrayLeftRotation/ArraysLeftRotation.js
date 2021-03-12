//function arg (arr, num)
//[1,2,3,4,5] num=4
//[2,3,4,5,1]1
//[3,4,5,1,2]2
//3[4,5,1,2,3]
//4[5,1,2,3,4]

function LeftRotation (arr,num){
    
    for (i=1;i<=num;i++){
        let shifted=arr[0]
        arr.shift()
        arr.push(shifted)
    }
    return arr
}
