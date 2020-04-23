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
// var rangeSumBST = function (root, L, R) {
//   let sum = 0;

//   let stack = [root];

//   while (stack.length > 0) {
//     let node = stack.shift();
//     if (node) {
//       console.log(node.val)
//       if (node.val <= R && node.val >= L) {
//         sum += node.val;
//       };
//       stack.push(node.left);
//       stack.push(node.right);
//     };
//   };
//   return sum;
// };

//rangeSumBST !!! DFS solution
// var rangeSumBST = function (root, L, R) {
//   if (!root) return 0;

//   let sum = 0;

//   if (root.val <= R && root.val >= L) sum += root.val;

//   return sum + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);

// };

//rangeSumBST !!! with a dfs closure method (method within method, best choice)
var rangeSumBST = function (root, L, R) {
  let sum = 0;
  const dfs = node => {
    if (!node) return;
    if (node.val >= L && node.val <= R) sum += node.val;
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return sum;
};

//getDecimalValue
var getDecimalValue = function (head) {
  let string = '';

  const dfs = node => {
    if (!node) return '';
    string += node.val;
    dfs(node.next);
  };

  dfs(head);

  return parseInt(string, 2)
};

//minTimeToVisitAllPoints
var minTimeToVisitAllPoints = function (points) {
  let seconds = 0;

  for (let i = 0; i < points.length - 1; i++) {
    let remainder = 0;
    let diff_x = Math.abs(points[i][0] - points[i + 1][0]);
    let diff_y = Math.abs(points[i][1] - points[i + 1][1]);
    if (diff_x > diff_y) {
      seconds += diff_x
    } else { seconds += diff_y };
  };

  return seconds;
};

// a/A career test 6 challenge problem
function getHeight(arr) {
  arr = arr.sort((a, b) => a - b) // !!! this is how you sort properly with numbers!
  let max = -Infinity
  arr[0] = 1
  for (let x = 1; x < arr.length; x++) {
    if (arr[x] > arr[x - 1]) {
      arr[x] = arr[x - 1] + 1
    } else if (arr[x] < arr[x - 1]) {
      max = arr[x - 1]
      break;
    }
    max = arr[x]
  }
  return max
}

//getTargetCopy (medium)
var getTargetCopy = function (original, cloned, target) {
  if (!cloned) return null;

  if (cloned.val === target.val) return cloned;

  return getTargetCopy(original, cloned.left, target) || getTargetCopy(original, cloned.right, target)
};

//deepestLeavesSum
var deepestLeavesSum = function (root) {
  let max_depth = 0;
  let sum = 0;

  const dfs = (node, depth) => {
    if (!node) return;

    if (depth === max_depth) {
      sum += node.val;
    } else if (depth > max_depth) {
      sum = node.val;
      max_depth = depth;
    };

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };

  dfs(root, 0);
  return sum;
};

//isAnagram
var isAnagram = function (s, t) {

  let hash = {};

  s.split('').forEach(el => {
    if (hash[el]) {
      hash[el] += 1;
    } else {
      hash[el] = 1;
    }
  });
  t.split('').forEach(el => {
    if (hash[el]) {
      hash[el] -= 1;
    } else {
      hash[el] = 1;
    }
  });

  return Object.values(hash).every(el => el === 0);

};

//findAnagrams !!! was unable to understand solution.
var findAnagrams = function(s, p) { 
    let hash = {},  uniqueChars = 0;
    for (let c of p) {
        if (hash[c]==null) {
            uniqueChars++;
            hash[c] = 1;
        } else {
            hash[c]++;
        }
    }
    
    let res = [];
    let left = 0, right = 0;
    for (right;right<s.length;right++) {
        if (hash[s[right]]!=null) hash[s[right]]--;
        if (hash[s[right]]==0) uniqueChars--;
        if (uniqueChars==0) res.push(left);
        if (right - left + 1 == p.length) {
            if (hash[s[left]]!=null) hash[s[left]]++;
            if (hash[s[left++]]==1) uniqueChars++;
        }
    }
    return res;
};

// var findAnagrams = function(s, p) {
//     p = p.split('').sort().join('');
//     let indices = [];
//     let length = p.length;

//     //gather key value pairs for p 
//     let p_obj = {};
//     for(let i = 0; i < p.length; i++){
//         if(p_obj[p[i]]){
//             p_obj[p[i]] += 1;
//         } else {
//             p_obj[p[i]] = 1;
//         };
//     };
    

//     //iterate through sections of s 
//     //gather key value pairs for sections of s
//     //compare with p hash
//     //repeat
//     for(let i = 0; i < s.length - length + 1; i++){
//         let s_obj = {};
//         let spliced = s.slice(i, i + length);
//         if(spliced.split('').sort().join('') === p){
//             indices.push(i)
//         }
//         // for(let j = 0; j < spliced.length; j++){
//         //     if(s_obj[spliced[j]]){
//         //         s_obj[spliced[j]] += 1;
//         //     } else {
//         //         s_obj[spliced[j]] = 1;
//         //     }
//         // };
        
//     };
    
//     return indices;
// };