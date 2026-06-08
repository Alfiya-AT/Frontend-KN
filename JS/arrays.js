// Arrays 

// let stu_info = [12, "Alfiya", true]
// console.log(stu_info)
// console.log(stu_info[1])

// let arr = new Array(1, 2, 3, 4)
// console.log(arr)

// arr.push(5)
// arr.unshift(0)
// arr.pop()
// // arr.shift()
// console.log(arr)


// imp ***** 
// splice => modify the original array
// & slice => modify the copy of the array 

// let nums = [10,20,30,40,50,60]
// // array.splice(start, deleteCount, item1, item2, itemN)
// nums.splice(1,2,36,63)
// console.log(nums)

// nums.splice(4,0,50,60,100)
// console.log(nums)
// // =>[
//   10,  20, 30, 40, 50,
//   60, 100, 50, 60
// ]


// nums.splice(4,0,1000)
// console.log(nums)
// => [
//   10,   20, 30,
//   40, 1000, 50,
//   60
// ]



// let arr1 = nums.slice(1,4)
// console.log(arr1) 

// let fruits = ["apple", "banana", "mango", "orange"]
// console.log(fruits.indexOf("mango"))
// console.log(fruits.includes("grapes"))
// console.log(fruits.sort())
// console.log(fruits.reverse())


// vimp **map filter reduce  n distructuinig array (ES6) n slice splice imp 

// fruits.forEach((fruit) => {console.log(fruit)})

// let numbers = [1,2,4]
// numbers.forEach((num)=>{console.log(`numbers is ${num}*4`)});



// ex => to calculate the discount of sale in amz n flipkart 
// let numbers = [1,2,3,4]
// let newNumbers = numbers.map((num) => num*4)
// console.log(newNumbers)

// let evenNumbers = numbers.filter((num) => num%2==0)
// console.log(evenNumbers)


// reduce 

// let numbers = [1,2,3,4]
// let sum = numbers.reduce((acc,curr) => acc+curr,0)
// console.log(sum)

// ex realworld => sum of finace of the year 
// let numbers=[1,3,4,5];
// let sum = numbers.reduce((sum,num)=>sum+num,0)
// console.log(sum)


// concat 

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = arr1.concat(arr2)
// console.log(arr3)

// join
// all ele r converted into string

// let words = ["hello", "world"]
// let sentence = words.join("-")
// console.log(sentence)

// Array destructuring
// let numbers = [1,2,3]
// let [a,b] = numbers
// console.log(a,b)


