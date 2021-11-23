// 1)
// A.Print odd numbers in an array

// (function(){
// let num=userInput[0].split("")
// let odd =[];
// for(let i=0; i<num.length; i++){
//     if((num[i]%2)!==0){
//         odd.push(num[i]);
//     }
// }
// console.log(odd.sort().join(" "));}())

// B.Convert all the strings to title caps in a string array

// (function(){
//     var str = userInput[0].split(" ")
//     console.log(str.map(i => i[0].toUpperCase() +
//     i.substr(1).toLowerCase()).join(' '))
// }())


// C.Sum of all numbers in an array

//     var num = userInput[0];
//     var sum = 0;
//     while(num!=0){
//         sum += num%10;
//         num = parseInt(num/10);
//     }
//     (function(){
//     console.log(sum)
//     }())

// D.Return all the prime numbers in an array

// (function(){
//     var numArray = userInput[0].split(" ")
//     numArray = numArray.filter((number) => {
//     for (var i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return true;});
// console.log(numArray.join(" "));}())
// E.Return all the palindromes in an array

// (function(){
// const arr = userInput[0].split(" ");
// const Palindrome = num => {
//    const str = String(num);
//    let i = 1;
//    let j = str.length ;
//    while(i < j) {
//       if(str[i] === str[j]) {
//          i++;
//          j--;
//       }
//       else {
//          return false;
//       }
//    }
//    return true;
// };
// console.log((arr));
// }())

// F.Return median of two sorted arrays of same size

// (function(){
// var ar1 = [1, 12, 15, 26, 38];
// var ar2 = [2, 13, 17, 30, 45];
// var n1 = ar1.length;
// var n2 = ar2.length;
// function getMedian(ar1, ar2, n)
// {
// 	var i = 0;
// 	var j = 0;
// 	var count;
// 	var m1 = -1, m2 = -1;
// 	for (count = 0; count <= n; count++)
// 	{
// 		if (i == n)
// 		{
// 			m1 = m2;
// 			m2 = ar2[0];
// 			break;
// 		}
// 		else if (j == n)
// 			{m1 = m2;
// 			m2 = ar1[0];
// 			break;
// 		}
// 		if (ar1[i] <= ar2[j])
// 		{
// 			m1 = m2;
// 			m2 = ar1[i];
// 			i++;
// 		}
// 		else
// 		{
// 			m1 = m2;
// 			m2 = ar2[j];
// 			j++;
// 		}
// 	}
// 	return (m1 + m2)/2;
// }
// if (n1 == n2)
//     console.log( getMedian(ar1, ar2, n1));
// else
//     console.log("err");
// }())


// G.Remove duplicates from an array

// (function(){
//     let dup = userInput[0].split(" ");
// let unique = [...new Set(dup)];
// console.log(unique);
// }())

// H.Rotate an array by k times

// (function(){
//    const rotate = (arr, count = 1) => {
//   return [...arr.slice(count, arr.length), ...arr.slice(0, count)];};
// const arr = userInput[0].split(" ");
// const k = userInput[1]
// console.log(rotate(arr, k).join(" "));}())


// 2)

// A.Print odd numbers in an array

// let arr=userInput[0].split(" ")
// let odds = arr.filter(n => n%2)
// console.log(odds)

// B.Convert all the strings to title caps in a string array

//  var str = userInput[0].split(" ")
//     console.log(str.map(i => i[0].toUpperCase() +
//     i.substr(1).toLowerCase()).join(' '))

// C.Sum of all numbers in an array

// const arr = [1, 2, 3, 4];
// function total(arr) {
//   if(!Array.isArray(arr)) return;
//   let sum=0;
//   arr.forEach(each => {
//     sum+=each;
//   });
//   return sum;
// };
// console.log(total(arr))


// D.Return all the prime numbers in an array

//  var numArray = userInput[0].split(" ")
//     numArray = numArray.filter((number) => {
//     for (var i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return true;});
// console.log(numArray.join(" "));

// E.Return all the palindromes in an array

// const arr = userInput[0].split(" ");
// const Palindrome = num => {
//    const str = String(num);
//    let i = 1;
//    let j = str.length ;
//    while(i < j) {
//       if(str[i] === str[j]) {
//          i++;
//          j--;
//       }
//       else {
//          return false;
//       }
//    }
//    return true;};
// console.log((arr));
