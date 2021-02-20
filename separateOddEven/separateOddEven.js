function separateOddEven (num){
    let result=''
    let str=num.toString()
    for (let i=0;i<str.length;i++){
        result+=str[i]
        if((str[i]%2!==0 && str[i+1]%2===0)||(str[i]%2===0 && str[i+1]%2!==0)){ 
          result+=','
        }
    }
    return result.split(',')
}


function separateOddEven (num){
    let result=''
    let str=num.toString()
    for (let i=0;i<str.length;i++){
        result+=str[i]
        if((str[i]+str[i+1])%2!==0){
          result+= ','
        }
    }
    return result.split(',')
}