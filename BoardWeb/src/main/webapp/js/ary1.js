/**
 * 
 */

 const numAry = [23,17,5,41,30, 12] ;
 let result = 0;
 
 numAry.forEach(function(elem,idx,ary){
		console.log(elem,idx,ary);
		if(elem % 2 == 0){
			result += elem;
		}
 }); //매개값으로 함수

console.log('짝수합은',result);
result = 0;

let evensum = function(elem,idx,ary){
		console.log(elem,idx,ary);
		if(elem % 2 == 0){
			result += elem;
		}
 };
 
 numAry.forEach(evensum);
 console.log('홀수번째의 값은 ' + result);
 result=0;
 
 let oddsum = function(elem,idx,ary){
		console.log(elem,idx,ary);
		if(idx % 2 == 0){
			result += elem;
		}
 };
 
  numAry.forEach(oddsum);
  console.log('홀수번째의 값은 ' + result);
  result=0;
 
 // 35 보다 작은 값들의 합을 저장
 let less35 = function(elem,idx,ary){
	if(elem < 35){
		result += elem;
	}
 }
 
 numAry.forEach(less35);
 console.log('5 보다 작은 값들의 합 ' + result);
 result=0;
 
 const dupAry = [10,27,32,55,27,10];
 const ary = [];//indexOF => 

 //
 dupAry.forEach(function(elem){
	if(ary.indexOf(elem) == -1){
		ary.push(elem);
	}
 });
 
 console.log(ary);