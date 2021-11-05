function print (value){
console.log (value)

};

var nums = [2,3,4,5];
print(nums); // 2,3,4,5
var newnum = 4;
nums.unshift(newnum);
print (nums); // 1,2,3,4,5
nums = [3,4,5];
nums.unshift(newnum,1,3,5,6);
print(nums); 

var nums = [1,2,3,4,5,9];
nums.pop();
print(nums.pop()); 


var dave= [squirrel= false,
events= ["work", "touched tree", "pizza", "running"]
];

print( JSON.stringify(dave));