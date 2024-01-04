/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
	const frequency = {};
	let operations = 0;

	for (const num of nums) {
		frequency[num] = (frequency[num] || 0) + 1;
	}

	for (const count of Object.values(frequency)) {
		if (count === 1) return -1;
		operations += Math.ceil(count / 3);
	}

	return operations;
};
