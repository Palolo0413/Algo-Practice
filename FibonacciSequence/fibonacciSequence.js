// solution 1 RECURSION
function fibonacci(num){
if (num <= 1) return 1
return fibonacci(num - 1) + fibonacci(num - 2);
}

//solution 2 LOOOOP
function fibonacci(n) {
	const list = [0, 1];
	for (let x = 2; x < n + 1; x += 1) {
		list.push(list[x - 2] + list[x - 1]);
	}
	return list[n];
}

// solution 3
function fibonacci(num){
    let a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }

// solution 4
function fibonacci(num, memo) {
    memo = memo || {};
  
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
  
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  }
