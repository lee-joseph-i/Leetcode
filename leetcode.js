// Search "!!!" for methods that I either 1. had difficulty with or 2. learned something new

// jewels-and-stones
var numJewelsInStones = function (J, S) {
  let stones_that_are_jewels = 0;
  S.split('').forEach(el => {
    if (J.includes(el)) stones_that_are_jewels += 1;
  });
  return stones_that_are_jewels;
};

//subtractProductAndSum
var subtractProductAndSum = function (n) {
  let product = 1;
  let sum = 0;

  n.toString().split('').forEach(num => {
    product *= parseInt(num, 10);
    sum += parseInt(num, 10);
  });

  return product - sum;
};

//smallerNumbersThanCurrent
var smallerNumbersThanCurrent = function (nums) {

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j] && j !== i) count++;
    }
    result.push(count);
  };

  return result;
};

//findNumbers
var findNumbers = function (nums) {
  let count = 0;

  nums.forEach(el => {
    if (el.toString().length % 2 === 0) count += 1;
  })

  return count;
};

//checkValidString !!!
var checkValidString = function (s) {
  if (s.split('')[0] === ')' || s.split('')[-1] === '(') return false
  let count = 0;
  let asterisks = 0;
  let falsey = false;

  s.split('').forEach(el => {
    if (el === '(') {
      count += 1;
    } else if (el === ')' && count < 1 && asterisks < 1) {
      falsey = true;
      return false;
    } else if (el === ')' && count < 1 && asterisks > 0) {
      asterisks -= 1;
    } else if (el === ')') {
      count -= 1;
    }
    if (el === '*') {
      asterisks += 1;
    }
  });

  if (falsey) return false;

  if (count > 0) {
    if (count > asterisks) {
      return false;
    }
  }

  count = 0;
  asterisks = 0;
  for (i = s.split('').length - 1; i >= 0; i--) {
    if (s[i] === ")") {
      count += 1;
    } else if (s[i] === "(" && count < 1 && asterisks < 1) {
      falsey = true;
      return false;
    } else if (s[i] === "(" && count < 1 && asterisks > 0) {
      asterisks -= 1;
    } else if (s[i] === "(") {
      count -= 1;
    }
    if (s[i] === "*") {
      asterisks += 1;
    }

  }

  if (falsey) return false;

  if (count > 0) {
    if (count > asterisks) {
      return false;
    }
  }

  return true;

};

//balancedStringSplit !!!
var balancedStringSplit = function (s) {
  let total = 0;
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      balance++
    } else {
      balance--;
    };
    if (balance === 0) total++;
  };

  return total;
};

//createTargetArray !!!
var createTargetArray = function (nums, index) {
  let target = [];

  for (let i = 0; i < index.length; i++) {
    target.splice(index[i], 0, nums[i]) //splice(index, # of elements to REMOVE, what u want to insert)
  }

  return target;
};


//rangeSumBST !!! (bfs solution)
var rangeSumBST = function (root, L, R) {
  let sum = 0;

  let stack = [root];

  while (stack.length > 0) {
    let node = stack.shift();
    if (node) {
      console.log(node.val)
      if (node.val <= R && node.val >= L) {
        sum += node.val;
      };
      stack.push(node.left);
      stack.push(node.right);
    };
  };
  return sum;
};

//rangeSumBST !!! DFS solution
// var rangeSumBST = function (root, L, R) {
//   if (!root) return 0;

//   let sum = 0;

//   if (root.val <= R && root.val >= L) sum += root.val;

//   return sum + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);

// };