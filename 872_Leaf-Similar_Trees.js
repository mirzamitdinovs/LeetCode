/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

function findLeaves(root) {
	let leaves = [];
	function traverse(node) {
		if (!node) return;
		if (!node.left && !node.right) leaves.push(node.val);
		else {
			traverse(node.left);
			traverse(node.right);
		}
	}
	traverse(root);
	return leaves;
}
var leafSimilar = function (root1, root2) {
	return findLeaves(root1).join('-') == findLeaves(root2).join('-');
};
