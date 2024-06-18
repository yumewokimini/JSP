/**
 *  ary3.js
 */
//어떤값을 만들어서 반환이 가능함. 배열이면 배열 넘버 타입 넘버타입

/*
let sum = 
 [10,20,30,40,50].reduce(function(acc,elem,idx,ary){ //요소
	console.log(acc,elem);//,idx,ary);
	return acc + elem;
 }, 0); // 이전 순번이 없어서 초기값이 0 으로 설정 - acc
 
 console.log('결과', sum);
 */


 let sum = 
 [10,20,40,50,30].reduce(function(acc,elem,idx,ary){ //요소
	console.log(acc,elem);//,idx,ary);
	if(acc<elem){
		return acc = elem;
	}else if(acc>elem){
		return acc;		
	}
 }, 0); // 이전 순번이 없어서 초기값이 0 으로 설정 - acc
 
 console.log('최대 값', sum);
  
 
 /*
 let sum = 
 [10,20,40,50,30].reduce(function(acc,elem,idx,ary){ //요소
	console.log(acc,elem);//,idx,ary);
	if(acc>elem){
		return acc = elem;
	}else if(acc<elem){
		return acc;		
	}
 }, 0); // 이전 순번이 없어서 초기값이 0 으로 설정 - acc
 
 console.log('최대 값', sum);
   */
 
['Sum','Mon','Tue','Web','Thr','Fri','Set'].reduce(function(acc,elem){
	let li = document.createElement('li');
	li.innerHTML = elem;
	acc.appendChild(li);
	
	return acc;
},document.getElementById('fruit'));