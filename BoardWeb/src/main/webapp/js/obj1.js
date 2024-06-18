/**
 *
 */

document.getElementById('dom').remove();

//등록 이벤트.
document.getElementById('addBtn').addEventListener('click',function(e){

	const employee = {id:document.getElementById('id').value,
					  first_name:document.getElementById('first_name').value,
					  email:document.getElementById('email').value,
					  salary:document.getElementById('salary').value
					  }
	document.querySelector('#list').appendChild(obj.makeRow(employee));
});


 const obj = {
	data: '',
	fields : ['id','first_name','email','salary'],
	showList: function(ary=[]){
		ary.forEach((emp,idx) =>{
			if(idx<3){
			document.querySelector('#list').appendChild(this.makeRow(emp));				
			}
		});
	},	
	makeRow(emp = {id,first_name,emil,salary}){
		let tr = document.createElement('tr');
		this.fields.forEach(field => {
			let td = document.createElement('td');
			td.innerText = emp[field]; //가변으로 id,first_name,emil,salary 불러올수있다.
			tr.appendChild(td);        //그이유가 딱히 선언 한곳이 없기때문 예제prop 참고
			
		});
		return tr;
	}
 } 
  
 obj.showList(employees);
  
  
  
 //예문
 const person = {
	name:"홍길동",
	age : 20
 }
 person.height = 167.8;
 
 person.showInfo = function(){
	return person.name + '-' + person.age + '-' + person.height;
 }
 let prop = 'age'
 console.log(person.name);
// console.log(person[age]);
 console.log(person.showInfo());
 
 console.log(person.prop);
 console.log(person[prop]);
 
 
 const today = new Date(); //시스템기준
 today.getFullYear();
 
 Date.prototype.format = function(){//prototype 원형 정의해서 쓸수있음
		let yy = this.getFullYear();
		let mon = this.getMonth() + 1;
		let dd = this.getDate();
		
		return yy + ' - '+ mon +' - '+ dd;
 }
 console.log(today.format());
