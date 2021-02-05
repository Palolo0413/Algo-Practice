function StrChallenge(str){
  let arrStr = str.split('*')
//  console.log('split', arrStr)
  return merge(arrStr)
}

function merge(arr){
  let first = arr[0].split('')
  let second = arr[1].split('')
  let merged = ''

  for(let i = 0; i < first.length || i < second.length; i++){
    if(i < first.length){
      merged += first[i]
    }
    if(i < second.length){
      merged += second[i]
    }
  }
  return merged
}