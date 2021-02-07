function arrayProducts (arr){
    let product=1
    let result=[]
    for (let i=0;i<arr.length;i++){
        result.push(product)
        product*=arr[i]
    }
    product=1
    for (let j=arr.length-1;j>=0;j--){
        product*=arr[j]
    }
}
[8, 10, 2]//[20,16,80]

[1]
1*8
[1,8]
8*10
[1,8,80]
