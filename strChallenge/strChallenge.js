function strChallenge (str) {
    let result=str.split('*')
    let first =result[0]
    let second =result[1]
    let finalString=''

    for (let i=0;i<first.length||i<second.length;i++){
        if(i<first.length){
           finalString+=first[i]
        }
        if(i<second.length){
            finalString+=second[i]
        } 
    }
    return finalString
}
