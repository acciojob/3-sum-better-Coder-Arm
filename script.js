function threeSum(arr, target) {
// write your code here
	let n = arr.length; 
	let minDiff = Number.MAX_SAFE_INTEGER;
	let sum = 0;
	for(let i = 0; i < n-3; i++){
		sum = arr[i]+arr[i+1]+arr[i+2];
		if(Math.abs(sum-target) < minDiff){
			minDiff = Math.abs(sum-target);
		}
	}
  return target + minDiff;
}

module.exports = threeSum;
