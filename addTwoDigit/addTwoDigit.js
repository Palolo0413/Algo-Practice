function addTwoDigit(num){
    let stringArray=num.toString().split('')
    let result=stringArray.map((ele) => parseInt(ele)).reduce((a,b)=>a+b)
    return result

}
