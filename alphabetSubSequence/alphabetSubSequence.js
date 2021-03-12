function alphabetSubSequence(str){
    let chars = str.split('')
    let codeArr=[]
    let count = 0
    chars.forEach((ele) => {
    codeArr.push(ele.charCodeAt(0))})

    console.log(codeArr)

    for (let i=0; i<codeArr.length-1; i++){
      codeArr[i]>codeArr[i+1] ? count++: count
    }
    return count === 0 ? true: false
}