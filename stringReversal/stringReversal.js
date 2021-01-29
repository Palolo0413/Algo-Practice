//solution 1
function stringReversal (string){
   for (let i=string.length-1;i>=0;i--){
       let reversed=''
       reversed+=string[i]
   }
   return reversed
}

// solution 2
const reverse = string =>
  string
    .split("")
    .reverse()
    .join("");

// solution 3

const _reverse = string => {
  let result = "";
  for (let character of string) result = character + result;
  return result;
};