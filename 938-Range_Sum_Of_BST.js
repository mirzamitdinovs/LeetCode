/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
	let sum = 0;
	function traverse(obj) {
		if (obj.left) {
			traverse(obj.left);
		}
		if (obj.val) {
			if (obj.val > low && obj.val < high) {
				sum += obj.val;
			}
		}
		if (obj.right) {
			traverse(obj.right);
		}
	}
	traverse(root);
	return sum + low + high;
};
