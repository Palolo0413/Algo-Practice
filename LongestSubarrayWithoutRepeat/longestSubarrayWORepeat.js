// solution 1
function longestSubarrayWithoutReapeating(nums) {
        let result = 0;
        
        for(let i = 0; i < nums.length; i++){
          for(let j = 0; j <nums.length; j++){
              if(nums.slice(i,j).includes(nums[j])){
                  break
              }
               result = Math.max(result, j - i + 1)
          }
         
        }
        
        return result
    }

// solution 2
function longestSubarrayWithoutReapeating(nums) {
    let result = 0
    
    for(let i = 0; i < nums.length; i++){
        let uniqueNums = new Set()
        console.log(uniqueNums)
        for(let j = i; j < nums.length; j++){
            if(uniqueNums.has(nums[j])) break;
            else uniqueNums.add(nums[j])
        }
        console.log(uniqueNums)
        result = Math.max(uniqueNums.size, result)
    }
    return result
}