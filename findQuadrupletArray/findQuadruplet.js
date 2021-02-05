function findArrayQuadruplet(arr, s) {

    if (arr.length < 4){
      return []
    }
    
    let sorted=arr.sort()
    for (let i=0;i<arr.length-3;i++){
      for (let j=i+1;j<arr.length-2;j++){
        let r=s-(sorted[i]+sorted[j])
        let smallpointer=j+1
        let bigpointer=arr.length-1
        while (smallpointer<bigpointer){
          if (sorted[smallpointer]+sorted[bigpointer]<r){
            smallpointer++
          }
          else if (sorted[smallpointer]+sorted[bigpointer]>r){
            bigpointer--
          }
          else{
            return [sorted[i], sorted[j], sorted[smallpointer], sorted[bigpointer]]
          }
        }
      }
      }
    }