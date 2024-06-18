/**
 * 
 */
console.log(employees);

let result = [23,45,22,39,10,56].filter(function(item,idx,ary){
	if(item % 2 == 0){
		return true; //true 값에 한에서 새로운 배열에 담아짐.
		// return item 아이템 값
	}
});

//console.log(result);

//employees.forEach(console.log);

//급여가 5000이 넘는 여자만 필터링
let over5000 = [];
let over5000Sum = 0;
let filterFnc = emp => emp.gender == 'Female' && emp.salary>5000;
filterFnc = function(emp){
	return emp.gender == 'Female' && emp.salary > 5000;
}
//over5000 = employess.filter(filterFnc);//

//employees.filter(filterFnc)
//	.forEach(function(emp) {
//	over5000Sum += emp.salary;
//});

employees.filter(function(emp,idx){
	return emp.gender == 'Female' && emp.salary>5000;
}).forEach(function(emp) {
	over5000Sum += emp.salary;
});

console.log('조건을 만족하는 급여 합 : ' , over5000Sum);


//over5000 = employess.filter(function(emp){//
//	return emp.gender == 'Female' && emp.salary > 5000;//
//};//

//over5000 = employees.filter(emp => emp.gender == 'Female' && emp.salary>5000);
//console.log(over5000);


//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//[A,A,A] -> [ A',A',A']
employees
	.map(function(elem,idx,ary){
		const obj = {}
		obj.name = elem.first_name + '-' + elem.last_name;
		obj.no = elem.id;
		obj.salary = elem.salary;
		return obj;
	})
	.forEach(console.log);
	

