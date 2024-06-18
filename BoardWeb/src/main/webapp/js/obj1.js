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
			td.innerText = emp[field];
			tr.appendChild(td);
			
		});
		return tr;
	}
 } 
  
 obj.showList(employees);
  
  
  
 
 const person = {
	name:"홍길동",
	age : 20
 }
 person.height = 167.8;
 
 person.showInfo = function(){
	return person.name + '-' + person.age;
 }
 
 console.log(person.name);
 console.log(person[age]);
 console.log(person.show.Info());
 
 