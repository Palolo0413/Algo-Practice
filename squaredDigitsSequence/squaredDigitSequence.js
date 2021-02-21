function squaredDigit (a0){
 let count = 1
 let array=[a0]

  while (true){
    count ++
    a0 = digitPower(a0)

    if (array.includes(a0)){
        return count
    }
    array.push(a0)
 }
}

function digitPower (num){
    const digits= num.toString().split('').map((ele)=> parseInt(ele)**2)
    const sum = digits.reduce((a,b)=> a+b)
    return sum
}