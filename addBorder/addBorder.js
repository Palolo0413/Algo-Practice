function addBorder(array){
    let border=""
    
    for (let i=0;i<array[0].length+2;i++){
        border+="*"
    }
    array.unshift(border)
    array.push(border)
    for (let j=1;j<array.length-1;j++){
        array[j]="*".concat(array[j],"*")
    }

    return array

}