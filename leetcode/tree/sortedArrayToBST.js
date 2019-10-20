var sortedArrayToBST = function(nums) {
    return ToBST(nums, 0, nums.length - 1);
};

function ToBST(nums, left, right) {
    if (left > right) {
        return null;
    }

    var mid = parseInt((left + right) / 2);
    var root = new TreeNode(nums[mid]);
    root.left = ToBST(nums, left, mid - 1);
    root.right = ToBST(nums, mid + 1, right);
    return root;
}