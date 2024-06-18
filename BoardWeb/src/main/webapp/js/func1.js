/**
 * 
 */
function sum (a,b){
	return a + b;
}

 let result = sum(10,20);
 result = sum(10);
 console.log('결과 ',result);
 
 const obj = {
	name : "홍길동",
	age : 20
 }
 
 function showObj(obj = {name : '홍길순', age:25}){
	return obj,name + ' - ' + obj.age;
 }
 
 console.log(showObj);
 
 function sumAry(ary = []){
	let sum = 0;
	for(let i = 0; i<ary.length; i++){
		sum += ary[i];
	}
	return sum;
 }
 
 result = sumAry([1, 2, 3, 4, 5]);
 console.log('결과 : ',result);
 
 function showItem(item){
	let days = ['Sum','Mon','Tue','Web','Thr','Fri','Set'];
	
	days.forEach(function(val){
				let span = document.createElement('spen');
		span.innerHTML = val + ' ';
		item.appendChild(span);
 	});
 		 result = sumAry([1, 2, 3, 4, 5]);
 		 console.log('결과 : ',result);
 	
 		function sumAry(ary = []){
		let sum = 0;
		for(let i = 0; i<ary.length; i++){
			sum += ary[i];
		}
		return sum;
 	}
 	//end of showItem.
 }
 
 showItem(document.getElementById('show'));
 
 console.log(window);
 
 