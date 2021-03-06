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

// same problem, but using unary plus (+) operator
// unary plus attempts to convert what's in front of it to a number
// +"1" returns 1
// +true returns 1
// +'' returns 0
// +"hello" returns NaN
var subtractProductAndSum = function (n) {
  let product = 1;
  let sum = 0;
  n.toString().split('').forEach(num => {
    product *= +num;
    sum += +num;
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


// We have a robot
// Starts a [0, 0]
// Can move Up down left right 'u' 'd' 'l' r'
// return whether the robot returns to [0,0]

const robot = (directions) => { // directions = "lr"
  let robot_pos = [0,0]; //if size of array was influenced by input, would influence space complexity.

  // if "u", then [0, 1];
  // if "d", then [0, -1];
  // if "r", then [1, 0];
  // if "l", then [-1, 0];

  for(let i = 0; i < directions.length; i++){
    if(directions[i] === 'u'){
      robot_pos[1] += 1;
    } else if (directions[i] === 'd'){
      robot_pos[1] -= 1;
    } else if (directions[i] === 'l'){
      robot_pos[0] -= 1; // robot_pos = [-1, 0]
    } else {
      robot_pos[0] += 1; // robot_pos = [0, 0]
    }
  }

  return (robot_pos[0] === 0 && robot_pos[1] === 0);
};


robot("lr");

// time complexity is o(n)
// space complexity is o(1)



// self dividing number (cannot have 0)
// 128 % 1 = 0
// 128 % 2 = 0
// 128 % 8 = 0


// 124 % 4 = 0

// L = 1, R = 22

const selfDividingNums = (L, R) => {
  //123 % 10 === 3
  //12 % 10 == 2
  //1 % 10 == 1
  let answer = [];

  const isSelfDividing = num => {
    let string = num.toString();
    string.forEach( el => {
      if( num % el !== 0 && parseInt(num) !== 0) return false;
    });
    return true;
  }


  for(let i = L; i <= R; i++){
    // if i is a self dividing number, then push i to answer array.
    if(isSelfDividing(i)){
      answer.push[i];
    }
  }

  return answer;
};



selfDividingNums(1, 12);


// Array of length n
// Integers between 0 and n exclusive
// Return numbers that appear more than once
// [1, 2, 3, 3, 4] => 3
// [3, 1, 2, 2, 5, 5] => 2 or 5
// [0, 1, 2] <-- invalid
// [1, 2, 3, 4] <-- invalid


// [3, 1, 2, 2, 5, 5] => 2 or 5
// [1, 2, 2, 3, 5, 5]
const repeatedNums = array => {
  sortedArray = array.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) { // 2
    if (sortedArray[i] === sortedArray[i + 1]) return sortedArray[i];
  }
}

// keep track of numbers in an set
// check if number exists in set
// return if it does

const repeatedNums = array => {
  const count = new Set();

  array.forEach(num => {
    if (count.has(num)) return num;
    count.add(num);
  });
}

// binaryTreePaths !!!
var binaryTreePaths = function (root) {
  let path = [];
  let paths = [];

  const dfs = (node) => {
    if (!node) return;
    path.push(node.val);

    if (!node.right && !node.left) {
      paths.push(path.join("->"));
    }
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
    path.pop(); // the unintuitive part, but IMPORTANT.
  };

  dfs(root);
  return paths;
};

//



// Given two binary strings,
// return their sum(also a binary string).

// The input strings are both non - empty and contains only characters 1 or 0.

// console.log(addBinary("11", "1") === "100")
// console.log(addBinary("1010", "1011") === "10101")
// console.log(addBinary("1", "111") === "1000")
// console.log(addBinary("1111", "1111") === "11110")

//   1
// +11
// ---
// 100
// 1
//    1
//  111
// 1000
// Constraints:

//   Each string consists only of '0' or '1' characters.
// 1 <= a.length, b.length <= 10 ^ 4
// Each string is either "0" or doesn 't contain any leading zero.

// 1 = 1
// 10 = 2
// 11 = 3
// 100 = 4
// 101 = 5
// 1010 = 10
// 1 * 2^3 + 0 * 2^2 + 1 * 2^1 + 0 * 2^0 = 1010

// "01" not valid

// "1000" 
// 8 4 2 1
// 2^3 2^2 2^1 2^0
// 


// loop through string a, backwards
// loop through string b, also backwards
// add the elements 
// initialize remainder as 0.
// if there is no remainder,
// if element.a + element.b + remainder > 1, then remainder = 1
// and also push "0" into a variable to eventually output
// else push "1" into the variable to eventually output

function addBinary(a, b) {
  if (a.length < b.length) return addBinary(b, a);
  let answer = "";

  a[-1] + b[-1]
  for(let i=(a.length - 1); i >= 0; i--){
    let remainder = 0;

    if( a[i] + b[i] + remainder > 1){
      answer += "0";
      remainder = 1;
    }
  }

  return answer;
}

function addBinary(a, b) {
  if (a.length < b.length) return addBinary(b, a);
  let len = a.length;
  let binary = "";
  let carry = 0;
  let j = b.length - 1;
  for (let i = len - 1; i >= 0; i--) {
    if (a[i] === "1") carry++;
    if (j >= 0 && b[j--] === "1") carry++;
    if (carry % 2 === 1) {
      binary += "1";
    } else {
      binary += "0";
    }
    carry = Math.floor(carry / 2);
  }
  if (carry === 1) binary += "1";
  return binary.split('').reverse().join('');
}




// Isomorphic Strings
// Overview: For two strings to be isomorphic, all occurrences of a character in 
// string A can be replaced with another character to get string B.
// The order of the characters must be preserved.There must be one - to - one mapping
// for every char of string A to every char of string B.

// paper and title would
// return true.egg and sad would
// return false.dgg and add would
// return true.

// isIsomorphic("egg", 'add'); // true
// isIsomorphic("paper", 'title'); // true
// isIsomorphic("kick", 'side'); // false

// O(n2) Solution - Brute Force method

// Iterate through every character in String a
// Check that the character in String b at the same position, is mapped in the same positions as in string a
// If anywhere it's not in the same position, return false
// return true

// O(n) - solution

// Hashmap: iterating through egg
// i = 0, strA[i] = "e"
// if Hashmap[strA[i]] !== undefined 
// Hashmap[strA[i]] = strB[i] 
// else check if strB[i] === Hashmap[strA[i]]

// if the strings are not the same length return false
// create hashmap string a with value of the character at string b
// Iterate through string a, adding to the hashmap and checking string b in each position
// If any char is not in position, return false
// return true

console.log(isIsomorphic("egg", 'add')) // === true)
console.log(isIsomorphic("paper", 'title')) //  === true)
console.log(isIsomorphic("kick", 'side'))  // === false)
console.log(isIsomorphic("eb", 'aa') === false)

// i = 0 charCode["e"] = "a" newWord = a
// i = 1 charcode["b"] = "a"
// indexOf(strB[i]) !== i
// new word = "afjd" === strB
// HashB[strB[i]]

function isIsomorphic(strA, strB) {
  if (strA.length !== strB.length) return false;
  let codeA = {};
  let codeB = {};
  for (let i = 0; i < strA.length; i++) {
    if (codeA[strA[i]] === undefined) {
      codeA[strA[i]] = strB[i];  
      if (codeB[strB[i]] === undefined) {
        codeB[strB[i]] = strA[i];
      } else {
        return false;
      }
    } else {
      if (codeA[strA[i]] !== strB[i]) return false;
    }
  }
  return true;
}

// isomorphic strings
// addBinary
//

//three coins

// Given many coins of 3 different face values, print the combination sums of the coins up to 1000. Must be printed in order.

//   eg: coins(10, 15, 55)
// print:
// 10
// 15
// 20
// 25
// 30
//   .
// .
// .
// 1000


function threeCoins( c1, c2, c3){
  let set = new Set;
  set.add(0);

  for(let i = 1; i <= 1000; i ++){
    if (set.has(i - c1) || set.has(i - c2) || set.has(i - c3) ){
      console.log(i);
      set.add(i);
    }
  }
}

// battleship
var countBattleships = function (board) {
  let battleShips = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === ".") {
        continue;
      } else if (i > 0 && board[i - 1][j] === "X") {
        continue;
      } else if (j > 0 && board[i][j - 1] === "X") {
        continue;
      } else { battleShips++ }
    }
  }

  return battleShips;
};


// def sort_scores(unsorted_scores, highest_possible_score)

//   # array of 0s at indices 0..highest_possible_score
//   score_counts = [0] * (highest_possible_score+1)

//   # populate score_counts
//   unsorted_scores.each do |score|
//       score_counts[score] += 1
//   end

//   # populate the final sorted array
//   sorted_scores = []

//   # for each item in score_counts
//   score_counts.each_with_index do |count, score|

//       # for the number of times the item occurs
//       (0...count).each do |time|

//           # add it to the sorted array
//           sorted_scores.push(score)
//       end
//   end

//   return sorted_scores
// end


// There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 
// Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.
// Initially, all the rooms start locked (except for room 0). 
// You can walk back and forth between rooms freely.
// Return true if and only if you can enter every room.
// Example 1:
// Input: [[1],[2],[3],[]]  
// // each subarray resembles a room, which means 4 rooms
// // the elements in each subarray represent keys for rooms. In other words, the first subarray element indicates that the first room has a key for room #1.


// Output: true
// Explanation:  
// We start in room 0, and pick up key 1.
// We then go to room 1, and pick up key 2.
// We then go to room 2, and pick up key 3.
// We then go to room 3.  Since we were able to go to every room, we return true.
 
// Example 2:
// Input: [[3],[1],[2],[0,1]] 
// Output: false 
// Explanation: We can't enter the room with number 2 in it


// // First option: 
// // We can iterate through the entire array. While iterating, we’ll store the provided index/indices from the subarray, until we go through every subarray. If all indices are found for array length n - 1, then we should be able to return true; otherwise, false. == linear operation. One for loop for iterating through the entire array, and a separate loop to check stored elements in a set against the range the array.length - 1. 


// // drawbacks: 
// // you’re iterating through the entire array which may be unnecessary and time intensive. You could potentially stop iterating once you’ve already found all the "keys” (or arr[i][j]). 





// // every room is defined by a range of 0 to n - 1. For example, [0, 1, 2, 3] // done
// // we can convert this into a set {0, 1, 2, 3} // done
// // start with our for loop, going through arr[x]
// // we’re at our first subarray:
// //// if the subarray has a key, remove the key from the set. 
// //// if set is empty, return true, otherwise, continue.
// //// if the subarray does not have a key, then also continue.
// //// if the subarray has multiple keys, in other words, that means we would need to do a nested loop to get each key from that subarray. This means worst scenario, runtime is o(n^2). 
// //// we should eventually stop iterating when either the set is empty, or we have gone through every element. If set is not empty, we return false. 

// //example input: [[3],[1],[2],[0,1]] 
// // we have 4 rooms
// // set should look like {0, 1, 2, 3}

// // we can store another set of keys that we have.


// const rooms_and_keys = rooms => {
// 	(0..rooms.length - 1) // need to break this range into a set. 
// 	let all_rooms = new Set
// 	let my_keys = new Set
// 	my_keys.add(0);

// 	for( let i = 0; i < rooms.length; i++){
// 		all_rooms.add(i);
// 	}
	
// 	for( let i=0; i<rooms.length; i++){
// 		if( my_keys.has(rooms[i] ){
// 		for( let j = 0; j <rooms[i].length; j++){
// 			all_rooms.remove(rooms[i][j])
// 			my_keys.add(rooms[i][j])
// 			if (all_rooms.length < 1) return true;
// }
// }	
// }
// 	if(all_rooms.length > 0) return false;

// }


// //stack  =[input[0]]  // []
// While stack not empty
// 	Room = Pop off top element of the stack //[3]
// 	Loop through the room
		


function firstPositive(A) {
  let set = new Set;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      set.add(A[i]);
    }
  }
  let result;
  for (let i = 1; i < A.length + 2; i++) {
    if (!set.has(i)) {
      result = i;
      break;
    }
  }
  return result;
}

var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let pos = head;
    let sum = 0;
    while (l2!==null || l1!==null || sum>0){
        
        pos.next = new ListNode(0);
        pos = pos.next;
        
        if (l1!==null){
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2!==null){
            sum += l2.val;
            l2 = l2.next;
        }
        
        pos.val = sum%10;
        // if(sum / 10 >= 0) sum = 1;
        // if(sum / 10 < 0) sum = 0; //why does this time out?
        sum = parseInt(sum/10);
    }
    return head.next;
};


// Battleship variant.
// Given a function that takes N, S, and T, output number of ships sunk and number of ships hit.
// N = grid size int
// S = topleft coordinate to bottomright coordinate of ships, separated by commas
// T = coordinates hit separated by spaces
// example, 
// function solution(3, "1D 2E,1A 3A", "1D 2D 3D 3A")
// notes: a ship cannot be greater than 2x2, but can be 1xN length
// ships don't overlap
// output should return a string e.g. '1,2'

function battleships(N, S, T){

}


var trap = function (height) {

  //   let totalWater = 0;

  //   for (let i = 1; i < height.length - 1; i++) {
  //     let maxLeft = 0, maxRight = 0;

  //     for (let j = i; j >= 0; j--) {
  //       maxLeft = Math.max(maxLeft, height[j]);
  //     }

  //     for (let j = i; j < height.length; j++) {
  //       maxRight = Math.max(maxRight, height[j]);
  //     }

  //     totalWater += (Math.min(maxLeft, maxRight) - height[i]);
  //   }

  //   return totalWater; 

  let totalWater = 0;

  const rightMaxArray = [];
  const leftMaxArray = [];
  const size = height.length

  let leftMax = height[0];

  for (let i = 0; i < size; i++) {
    if (height[i] > leftMax) leftMax = height[i];

    leftMaxArray[i] = leftMax;
  }

  let rightMax = height[size - 1];

  for (let i = size - 1; i >= 0; i--) {
    if (height[i] > rightMax) rightMax = height[i];

    rightMaxArray[i] = rightMax;
  }

  for (let i = 0; i < size; i++) {
    totalWater += Math.min(leftMaxArray[i], rightMaxArray[i]) - height[i];
  }

  return totalWater;

  //       if(height.length < 3) return 0;

  //   let currentCol = height[height.length - 1];
  //   let rainWater = 0;

  //   for(let i = height.length - 2; i >= 0; i--) {
  //     if(currentCol >= height[i]) {
  //       rainWater += currentCol - height[i];
  //     } else {
  //       currentCol = height[i];
  //     }
  //   }

  //   return rainWater;
};

var getDecimalValue = function(head) {
    let binary_string = '';
    
    const dfs = node => {
        if(!node) return '';
        binary_string += node.val;
        dfs(node.next);
    };
    
    dfs(head);
    return parseInt(binary_string, 2);
};

var runningSum = function (nums) {
  let increment = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + increment;
    increment = nums[i];
  };
  return nums;
};

var shuffle = function (nums, n) {
  let result = [];

  for (let i = 0; i < nums.length / 2; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }

  return result;
};

var kidsWithCandies = function (candies, extraCandies) {
  let max = 0;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) max = candies[i];
  };
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  };
  return result;
};

function kadanesAlgorithm(array) {
  let maxSum = array[0]; // 3
  let totalSum = maxSum; // 3
  for( let i=0 ; i < array.length; i++){ // i = 0
    let currentSum = array[i];
    for( let j=0; j < array.length; j++){ // j = 2
      if( j > i ){ //true
        currentSum += array[j]; // 8 - 9 = -1
      }
    }
    if(currentSum > maxSum){ // true
      maxSum = currentSum;  // maxSum = 8
    }
  }
  return maxSum;
}
//let array = [3, 5, -9, 100]
// output = 100
//first thoughts:
// iterate through the array, holding onto a max sum variable.
// as I add array[i + 1], check currentSum against maxSum.
// if greater, then we set maxSum to currentSum.


var maxProduct = function (nums) {
  //nums is an array of integers [1,2,3]
  //choose 2 indices i and j
  //find two highest elements, subtract each by one, then multiply and return

  let sorted = nums.sort((a, b) => b - a);
  return (sorted[0] - 1) * (sorted[1] - 1);
};

var toLowerCase = function (str) {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let hash = {};
  for (let i = 0; i < lower.length; i++) {
    hash[upper[i]] = lower[i];
  }
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      result += hash[str[i]];
    } else {
      result += str[i];
    }
  }

  return result;
};

var busyStudent = function (startTime, endTime, queryTime) {
  //gather a count of students who fall within accepted parameter.
  //loop through both arrays using a singular for loop.
  //check start and end points per iteration and see if it inclusively falls within target.
  // count increments if so.

  let count = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) count++;
  }
  return count;
};

var oddCells = function (n, m, indices) {
  //n = number of arrays
  //m = number of subarrays (or elements in each array)

  //iterate through indices
  //indices[i] = [ri, ci]
  //go through the entire row of ri and add +1 to each... ? break this down
  //so if ri = 0, that means look at n = 0 and m = 0 to m - 1
  // so ri is basically n.
  //and if ci = 1, that means look at n = 0 TO n-1, and m = 1
  // so ci is basically m.
  //iterate and check for odd values

  let count = 0;

  // this also works!
  // let array = new Array(n);
  // for(let i=0; i<array.length; i++){
  //     array[i] = new Array(m);
  // }

  let array = new Array(n).fill(0).map((row) => new Array(m).fill(0));

  for (let i = 0; i < indices.length; i++) {
    let row = indices[i][0];
    let col = indices[i][1];
    // array[row].forEach(el => {
    //     console.log("test!")
    //     el++; //this doesn't work for some reason.
    // });
    for (let j = 0; j < array[0].length; j++) {
      array[row][j]++;
    }
    array.forEach((subArr) => {
      subArr[col]++;
    });
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      if (array[i][j] % 2 != 0) count++;
    }
  }
  return count;
};

var maximum69Number = function (num) {
  let toS = num.toString();
  let result = "";
  for (let i = 0; i < toS.length; i++) {
    if (toS[i] === "6") {
      result += "9";
      if (i < toS.length) result += toS.slice(i + 1, toS.length);
      break;
    } else {
      result += toS[i];
    }
  }
  return parseInt(result);
};



function fourSums(array, targetSum){ //[7, 6, 4, -1, 1, 2], 16
  //array is nonempty
  //target is an integer
  let result = []; //[[7,6,4,1]]

  //brute force n^4 solution
  for(let i=0; i<array.length - 3; i++){
    for(let j=i+1; j<array.length - 2; j++){
      for(let k=j+1; k<array.length - 1; k++){
        for(let l=k+1; l<array.length; l++){
          if(array[i] + array[j] + array[k] + array[l] === targetSum){
            result.push([array[i], array[j], array[k], array[l]]); //[7, 6, 4, -1]
          };
        };
      };
    };
  };
  return result;

  
}


// console.log(fourSums([1, 2, 3, 4, 5, 6, 7], 10));

// time: On^3 space: On^2


// new Set
// {1, 2, 3, 4, 5, 6, 7}
// try to do a three Sums with a brute force n^3 triple loop. 
// subtract every threeSums to the targetSum, then do a lookup operation to see if that result exists within the set (unused elements in the array)
// for(){ 
//   for(){ 
//     for(){

//     }
//   }
//   for(){
    
//   }
// }


var destCity = function (paths) {
  // we're essentially going through each subarray
  // recording all the last index of each subarray
  // and output the one that doesn't exist in a first index

  let list = new Set();
  for (let i = 0; i < paths.length; i++) {
    list.add(paths[i][1]);
  }
  for (let i = 0; i < paths.length; i++) {
    list.delete(paths[i][0]);
  }

  return list.values().next().value;
};

var freqAlphabets = function (s) {
  // i could do backwards lookback
  // if there's a #, then i look at the next two numbers
  // if it's a number, i just go by the number alone.

  alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = [];

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "#") {
      //grab s[i - 2] then s[i - 1]
      result.unshift(
        alphabet[parseInt(s[i - 2].toString() + s[i - 1].toString() - 1)]
      );
    } else if (s[i + 1] !== "#" && s[i + 2] !== "#") {
      result.unshift(alphabet[s[i] - 1]);
    }
  }

  return result.join("");
};

var replaceElements = function (arr) {
  // result = [];
  // while (arr.length > 1) {
  //   arr.shift();
  //   result.push(Math.max(...arr));
  // }
  // result.push(-1);
  // return result;

  // max = 0

  // second to last el = last el
  // if second to last > last, max = second to last, vice versa
  //
  // let result = [];
  let lastEl = arr[arr.length - 1]; // 1
  let max = lastEl; // 1

  let secondtoLastEl = arr[arr.length - 2]; //6
  arr[arr.length - 2] = lastEl;

  if (secondtoLastEl > lastEl) max = secondtoLastEl; // 6 > 1, max = 6

  for (let i = arr.length - 3; i >= 0; i--) {
    let current = arr[i];
    arr[i] = max;
    if (current > max) max = current;
  }

  arr[arr.length - 1] = -1;

  return arr;
};

var isSubsequence = function (s, t) {
  let target = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[target]) target += 1;
    if (target === s.length) return true;
  }
  return false;
};

var arrangeCoins = function (n) { // n = 5
  let count = 0;
  let row = 0;

  while (n > 0) {
    row += 1;
    if (n - row >= 0) {
      count += 1;
      n -= row;
    } else {
      n = 0;
    };
  };

  return count;
};


var isPalindrome = function(head) {
    if (head === null || head.next === null) return true;
    let nums = [head.val];
    let slow = head, fast = head;
    while(fast.next !== null && fast.next.next !== null){
      // ex 1=> 2 => 3 => 3 => 2 => 1
        slow = slow.next; 
        // slow = 2 => 3; fast = 3 => 2;
        fast = fast.next.next;
        nums.push(slow.val)
    }
    // at this point, nums will be [1, 2, 3] and that's it
    if (fast.next === null){
        nums.pop();
    }
    while (slow.next !== null){
        slow = slow.next;
        if (nums.pop() !== slow.val){
            return false;
        }
    }
    return true;
};


var nthUglyNumber = function (n) {
  // The below code is brute force that does not satisfy large number test cases, understanding how the math works here is the key to reducing runtime.

  //     let uglyNumbers = [1,2,3,4,5,6,8,9];
  //     if(n === 1) return uglyNumbers[n-1];

  //     const isUgly = num => {
  //         for(let j=Math.round(uglyNumbers.length / 5); j<uglyNumbers.length; j++){
  //           if(uglyNumbers[j] * 2 === num || uglyNumbers[j] * 3 === num || uglyNumbers[j] * 5 === num){
  //             return true;  
  //           };
  //         };
  //         return false;
  //     };

  //     let i=10;
  //     while(uglyNumbers.length + 1 <= n){
  //         if(isUgly(i)){
  //             uglyNumbers.push(i);
  //         };
  //         i++;
  //     };
  //     return uglyNumbers[n-1];


  let uglyNum = 1;
  let count = 1;
  let multiQueue = [[], [], []];
  let seen = {};
  while (count < n) {
    let ugly2 = uglyNum * 2;
    let ugly3 = uglyNum * 3;
    let ugly5 = uglyNum * 5;
    if (!seen[ugly2]) {
      multiQueue[0].push(ugly2)
      seen[ugly2] = true;
    }
    if (!seen[ugly3]) {
      multiQueue[1].push(ugly3)
      seen[ugly3] = true;
    }
    if (!seen[ugly5]) {
      multiQueue[2].push(ugly5)
      seen[ugly5] = true;
    }
    let UglyQueue = multiQueue.reduce((acc, queue) => {
      return acc[0] <= queue[0] ? acc : queue;
    })
    uglyNum = UglyQueue.shift();
    count++
  }
  return uglyNum
};

var hammingDistance = function (x, y) {

  // XOR will give you the difference in decimal. You convert that to binary and
  // however many 1s there are determines the hamming distance.

  let diff = x ^ y;
  let string = diff.toString(2);
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '1') count++;
  };
  return count;
};

var plusOne = function (digits) {
  let carry = 1;
  let i = 1;

  while (carry >= 1) {
    //need to unshift integer 1 if the array ends.
    //need to ++ array[array.length - i] if the array doesn't end.
    if (digits[digits.length - i] === undefined) {
      digits.unshift(1);
      carry--;
    } else if (digits[digits.length - i] + 1 >= 10) {
      digits[digits.length - i] = (digits[digits.length - i] + 1) % 10;
    } else {
      digits[digits.length - i]++;
      carry--;
    }
    i++;
  };
  return digits;
};


function favoriteRestaurant(requests, restaurants) {
  //go through requests
  //have a count-type variable that keeps track of what each user wants
  // go for a nested loop, top layer goes through restaurants as we go through each request.

  // restaurants: “Name”,  “Cuisine”, “Price”, “Points”
  // requests: “Name”(of user), “Cuisine”, “Price”

  // iterate through restaurants, give it a new key-value called “points”: 0 counter

  for (let i = 0; i < restaurants.length; i++) {
    restaurants[i][points] = 0;
  }

  for (let i = 0; i < restaurants.length; i++) {
    for (let j = 0; j < requests.length; j++) {
      if (restaurants[i].hasValue(requests[j]["Cuisine"])) restaurants[i]["Points"]++;
      if (restaurants[i]["Price"].length >= requests[j]["Price"].length) restaurants[i]["Points"]++;
    }

    let mostFavoriteRestaurant = restaurants[0]

    for (let i = 1; i < restaurants.length; i++) {
      if (restaurants[i]["Points"] >= mostFavoriteRestaurant["Points"]){
        mostFavoriteRestaurant = restaurants[i];
      };
    };

    return mostFavoriteRestaurant["Name"];

    //  considerations:
    // - what if two restaurants have the same amount of points?
    // - practically, suggest to sort it! Have a most popular restaurant followed by the next.

    // constraints:
    // - 0.2 mile radius of restaurants (so likely less than 100 restaurants)
    // - likely anywhere from 3-30 requests (or more if we think about online catering for the entire office).
    // - both constraints are helpful to determine efficiency-necessity. These are fairly low data inputs that even a   //quadratic runtime will likely not impact user experience.
  }
};

var islandPerimeter = function (grid) {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        if (grid[i - 1]?.[j] !== 1) perimeter++;
        if (grid[i + 1]?.[j] !== 1) perimeter++;
        if (grid[i][j - 1] !== 1) perimeter++;
        if (grid[i][j + 1] !== 1) perimeter++;
      };
    };
  };
  return perimeter;
};

var threeSum = function (nums) {

  //     let hash = {};
  //     for(let i=0; i<nums.length; i++){
  //         if(hash[nums[i]]){
  //             hash[nums[i]]++;
  //         } else {
  //             hash[nums[i]] = 1;
  //         };
  //     };

  //     let sorted = nums.sort((a,b) => a - b);

  //     let result = [];

  //     for(let i=0; i<sorted.length - 2; i++){
  //         for(let j=i+1; j<sorted.length - 1; j++){
  //             hash[sorted[i]]--;
  //             hash[sorted[j]]--;
  //             let twoSum = sorted[i] + sorted[j];
  //             if(hash[-twoSum] > 0){
  //               result.push([sorted[i], sorted[j], -twoSum]);
  //             };
  //             hash[sorted[i]]++;
  //             hash[sorted[j]]++;
  //         };
  //     };

  //     for(let i=0; i<result.length; i++){
  //         result[i].sort((a, b) => a - b);
  //     };

  //     let stringified = [];
  //     for(let i=0;i<result.length;i++){
  //       stringified.push(result[i].toString());  
  //     };
  //     for(let i=0; i<result.length - 1; i++){
  //         for(let j=i+1; j<result.length; j++){
  //             if(stringified[i] === stringified[j]){
  //               result.splice(j, 1);
  //                 stringified.splice(j, 1);
  //                 j--;
  //             };
  //         };
  //     };

  //     return result;

  let sorted = nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < sorted.length; i++) {
    let j = i + 1;
    let k = sorted.length - 1;
    if (i !== 0 && sorted[i] === sorted[i - 1]) continue;

    while (j < k) {
      let sum = sorted[i] + sorted[j] + sorted[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else if (sum === 0) {
        result.push([sorted[i], sorted[j], sorted[k]]);
        while (sorted[j] === sorted[j + 1]) j++;
        while (sorted[k] === sorted[k - 1]) k--;
        j++;
        k--;
      };
    };
  };

  return result;
};

const widthOfBinaryTree = root => {
  if (!root.left && !root.right) return 1;
  let max = 0;
  let queue = [root];
  let bank = [];

  while (true) {
    while (queue.length) {
      let node = queue.shift();
      if (node === null) {
        bank.push(null, null);
      } else {
        bank.push(node.left, node.right);
      };
    };

    let leftPointer = 0; //or left index
    let rightPointer = bank.length - 1; // or right index
    while (bank[leftPointer] === null) leftPointer++;
    while (bank[rightPointer] === null) rightPointer--;
    if (leftPointer > rightPointer) {
      return max;
    } else {
      queue = bank.slice(leftPointer, rightPointer + 1);
      max = Math.max(max, queue.length);
      bank = [];
    };
  };
};


var flatten = function (head) {
  //start head as the node
  //get the node, then node.next
  //if it has a child, get a new list stored
  //store that list with the child, followed by next
  //and so forth
  //     let flatList = [];

  //     let queue = [head];
  //     while(queue.length){
  //         let node=queue.shift();
  //         flatList.push(node);
  //         let secondaryQueue = [];
  //         // if(node.child) secondaryQueue.push(node.child);
  //         while(node.child){
  //             let childNode = secondaryQueue.shift();
  //             flatList.push(childNode);
  //         };
  //         queue.push(node.next);
  //     };

  //     return flatList;

  //     if (!head) return null;
  //     let dummyHead = new Node(0, null, head, null);

  //     let stack = [head];
  //     let current = dummyHead;
  //     let prev = null;

  //     while(stack.length!=0) {        
  //         current = stack.pop();

  //         if (prev) {
  //             current.prev = prev;
  //             prev.next = current;
  //         } 

  //         if (current.next!=null) stack.push(current.next);
  //         if (current.child!=null) { // has a child
  //             stack.push(current.child);
  //             current.child = null; // remove child reference
  //         }

  //         prev = current;   
  //     }

  //     return dummyHead.next;

  if (!head) return head;
  let stack = []; //store all rest part of linkedlist nodes when has child
  let cur = head;
  while (cur) {
    if (cur.child) {
      if (cur.next) stack.push(cur.next);  //must check cur.next is null or not before added to stack
      cur.next = cur.child;
      cur.next.prev = cur; //because it is doubly linkedlist
      cur.child = null; //already assigned to next so now no child anymore. set null
    }
    else if (!cur.next && stack.length != 0) { //now reach tail of linkedlist 
      cur.next = stack.pop();
      cur.next.prev = cur; // because it is doubly linkedlist
    }
    cur = cur.next;
  }
  return head; //return reference of head
};

var isSameTree = function (p, q) {
  let result = true;
  const dfs = (p, q) => {
    if (!!p && !!q) {
      if (p.val !== q.val) {
        result = false;
        return;
      };
      dfs(p.left, q.left);
      dfs(p.right, q.right);
    };
    if ((!!p && !q) || (!p && !!q)) {
      result = false;
      return;
    };
  };
  dfs(p, q);
  return result;
};

var reverseWords = function (s) {
  let split = s.split(" ")

  let result = [];

  for (let i = split.length - 1; i >= 0; i--) {
    if (split[i] !== " " && split[i].length > 0) {
      result.push(split[i]);
    };
  };
  return result.join(" ");
};

var myPow = function (x, n) {
  // dynamic programming solution
  const memo = new Map([[1, x]]);
  let p = Math.abs(n), r = 0, result = 1;

  while (r < p) {
    for (let [key, val] of Array.from(memo).reverse()) {
      if (r + key <= p) {
        r += key;
        result *= val;
        memo.set(r, result);
        break;
      }
    }
  }
  return n < 0 ? 1 / result : result;
};

var topKFrequent = function (nums, k) {
  const n = nums.length;
  const freq = new Map();

  for (const num of nums) {
    if (!freq.get(num)) freq.set(num, 0);
    freq.set(num, freq.get(num) + 1);
  }

  const buckets = [];

  for (let i = 0; i <= n; i++) {
    buckets[i] = [];
  }

  for (const [num, count] of freq) {
    buckets[count].push(num);
  }

  const res = [];

  for (let i = n; i >= 0 && k > 0; i--) {
    if (buckets[i].length > 0) {
      k -= buckets[i].length;
      res.push(...buckets[i]);
    }
  }

  return res;
};

var findOrder = function (numCourses, prerequisites) {
  const inDegrees = Array(numCourses).fill(0);
  for (const [v] of prerequisites) {
    inDegrees[v]++;
  }

  const q = [];
  for (let i = 0; i < inDegrees.length; i++) {
    const degree = inDegrees[i];
    if (degree === 0) q.push(i);
  }

  const res = [];
  while (q.length) {
    const u0 = q.shift();
    numCourses--;
    res.push(u0);
    for (const [v, u] of prerequisites) {
      if (u === u0) {
        inDegrees[v]--;
        if (inDegrees[v] === 0) q.push(v);
      }
    }
  }
  return numCourses === 0 ? res : [];
};

var removeElements = function (head, val) {
  let node = head;
  let previous = null;

  while (node) {
    if (node.val === val && previous === null) {
      head = node.next;
      node = node.next;
      continue;
    };
    if (node.val === val && previous !== null) {
      console.log(head)
      previous.next = node.next;
      console.log(head)
      console.log("---")
    } else {
      previous = node;
    };
    node = node.next;
  };

  return head;
};

var removeElements = function (head, val) {
  while (head && head.val === val) {
    head = head.next;
  };

  let node = head;
  while (node && node.next) {
    if (node.next.val === val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    };
  };

  return head;
};


const exist = (board, word) => {
  let seen = {};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0] && buildWord(board, word, j, i)) return true;
    };
  };
  return false;
};
const buildWord = (board, word, x, y, currentWord = "") => {
  if (word === currentWord) return true;
  if (board[y]?.[x] !== word[currentWord.length]) return false;
  let char = board[y][x]
  currentWord += char;
  board[y][x] = "-"
  let top = buildWord(board, word, x, y - 1, currentWord);
  let right = buildWord(board, word, x + 1, y, currentWord);
  let bottom = buildWord(board, word, x, y + 1, currentWord);
  let left = buildWord(board, word, x - 1, y, currentWord);
  if (top || right || bottom || left) return true;
  board[y][x] = char;
};

var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  } else {
    const traversed = [[root.val]];
    let parents = [root];
    let children = [];
    let zigZag = false;
    while (parents.length > 0) {
      for (let root of parents) {
        if (root.left)
          children.push(root.left);
        if (root.right)
          children.push(root.right);
      }
      if (children.length > 0) {
        traversed.push(
          zigZag ? children.map(child => child.val) : children.map(child => child.val).reverse()
        );
      }
      zigZag = !zigZag;
      parents = [...children];
      children = [];
    }
    return traversed;
  }
};

var singleNumber = function (nums) {
  let res = 0;

  for (let num of nums) res ^= num
  // xor of two numbers both cannot be equal (if equal then xor will be 0)

  res &= -res; // getting the last set bit

  let ans = [0, 0] // this is the result
  for (let num of nums) {
    if (res & num) ans[0] ^= num;
    // if the bit at the position is 1 then we xor for for the first group
    else ans[1] ^= num;
    // if not other group
  }

  return ans;
};

function hashMap(queryType, query) {
  let hash = {};
  let sum = 0;
  let keyCounter = 0;
  let valueCounter = 0;
  for (let i = 0; i < query.length; i++) {
    if (queryType[i] === "insert") {
      hash[query[i][0] - keyCounter] = query[i][1] - valueCounter;
    } else if (queryType[i] === "addToKey") {
      keyCounter += query[i][0];
    } else if (queryType[i] === "addToValue") {
      valueCounter += query[i][0];
    } else {
      sum += hash[query[i][0] - keyCounter] + valueCounter;
    };
  };
  return sum;
};

var addDigits = function (num) {
  if (num < 10) return num;

  let result = num;

  while (result > 9) {
    let string = result.toString();
    result = 0;
    for (let i = 0; i < string.length; i++) {
      result += parseInt(string[i]);
    };

  };

  return result;
};

var buildTree = function (inorder, postorder) {
  if (inorder.length === 0) return null;
  let root = postorder[postorder.length - 1];
  let pivot = inorder.indexOf(root);
  return {
    val: root,
    left: buildTree(inorder.slice(0, pivot), postorder.slice(0, pivot)),
    right: buildTree(inorder.slice(pivot + 1), postorder.slice(pivot, -1))
  };
};


const pS = (a, b) => {
  let pSCollection = {};
  let p = '';
  a.forEach(str => {
    p += str;
    prefixStringCollection[p] = true;
  });
  for (let s of b) {
    if (!pSCollection[s]) return false;
  };
  return true;
}

var isPalindrome = function (s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789"

  let alphaNumerics = s.split("").filter(ele => alphabet.includes(ele.toLowerCase()) || numbers.includes(ele));

  for (let i = 0; i < alphaNumerics.length; i++) {
    if (Number.isInteger(alphaNumerics[i])) {
      if (alphaNumerics[i] !== alphaNumerics[alphaNumerics.length - 1 - i]) return false;
    } else {
      if (alphaNumerics[i].toLowerCase() !== alphaNumerics[alphaNumerics.length - 1 - i].toLowerCase()) return false;
    }
  };
  return true;
};

var isPowerOfFour = function (num) {
  let n = 0;
  while (Math.pow(4, n) <= num) {
    if (Math.pow(4, n) === num) return true;
    n++
  };
  return false;
};

var longestPalindrome = function(s) {
    const set = new Set();
    let count = 0;
    
    for (let char of s) {
        if (set.has(char)) {
			count += 2;
            set.delete(char);
        } 
		else {
            set.add(char);
        }
    }

    return count + (set.size > 0 ? 1 : 0);
};

var countNegatives = function(grid) {
    
    let count = 0;
    
    //brute force simple solution: iterate through chronologically index-wise
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            // if(grid[i][j] < 0) count++;
            if(grid[i][j] < 0){
                //this is somehow slower...
                count += grid[i].length - j;
                j=grid[i].length;
            };
        };
    };
    
    return count;
};


var sumZero = function (n) {
  if (n === 0) return [0];

  let result = [];

  if (n % 2 !== 0) {
    result.push(0);
    n--;
  };

  let i = 1;
  while (n > 0) {
    result.push(i, -i);
    n -= 2;
    i++;
  };

  return result;
};

var flipAndInvertImage = function (A) {
  let result = [];

  for (let i = 0; i < A.length; i++) {
    let temp = [];
    for (let j = A[i].length - 1; j >= 0; j--) {
      A[i][j] === 1 ? temp.push(0) : temp.push(1);
    };
    result.push(temp);
  };

  return result;
};