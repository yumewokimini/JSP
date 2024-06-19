/**
 *  ajax1.js
 *  비동기방식 처리 
 */

setTimeout(function(){//윈도우 가지고 있는 메소드 매개값 1. 실행할 함수 2.지연시간(m/s)
	console.log("1번")
},1000); 

setTimeout(function(){
	console.log("2번")
},3000); 
 
setTimeout(function(){
	console.log("3번")
},2000); 
  
 
console.log("end");