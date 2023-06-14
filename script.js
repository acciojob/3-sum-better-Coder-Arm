function threeSum(arr, target) {
// write your code here
	arr.sort((a,b) => a-b);
	let n = arr.length; 
	let minDiff = Number.MAX_SAFE_INTEGER;
	let closestSum = 0;
	for(let i = 0; i < n-2; i++){
		let j  = i+1;
		let k = n-1;
		while(j < k){
		let sum = arr[i]+arr[j]+arr[k];
		if(sum === target) return target;
		else if(sum < target){
			if(target - sum < minDiff){
				minDiff = target-sum;
				closestSum = sum;
			}
			j++;
		}
			else{
				if(sum - target < minDiff){
                 minDiff = sum-target;
				 closestSum = sum;	
				}
				k--;
			}
		
		}
	}
  return closestSum;
}

module.exports = threeSum;
