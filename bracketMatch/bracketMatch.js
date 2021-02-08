function bracketMatch(text) {
    let needClosing=0
    let needOpening=0
    for (let i=0;i<text.length;i++){
      if(text[i]==='('){
         needClosing++
      }
      if(text[i]===')'){
         if(needClosing!==0){
           needClosing--
         }
         else{
           needOpening++
         }     
      }
    }
    return needClosing+needOpening
  } 