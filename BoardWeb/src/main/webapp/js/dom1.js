/**
 * dom1.js
 */

// document.getElementById('fruit').style.display = 'none';
 document.querySelector('table.table tr:nth-of-type(5)').setAttribute('align', 'center');

// 페이지 로딩하면서 회원 3명 출력,


for(let mem of myMembers){
		document.getElementById('memberList')
			.appendChild(addRow(mem));
	}
 
  			
// 추가 버튼 클릭 이벤트 등록
 document.getElementById('addBtn').addEventListener('click',addMemberFnc); // 사용자가 addbtn 클릭하면 addmemberfnc실행
 document.getElementById('modBtn').addEventListener('click',modMemberFnc); // 사용자가 modBtn 클릭하면 modMemberFnc실행
 document.getElementById('delBtn').addEventListener('click',removeMemberFnc); // 사용자가 modBtn 클릭하면 modMemberFnc실행
 
 document.querySelector('thead input[type="checkbox"]').addEventListener('change',allCheckFnc);
 
  
 function allCheckFnc(){
	
	console.log(this.checked);
	
	let Imp = document.querySelector('thead input[type="checkbox"]')
	if(!this.checked){
		  Imp=false;
	}
	
	document.querySelectorAll('#memberList tr')
		.forEach(item => item.children[5].children[0].checked = this.checked);
	}





//				 1. 이벤트(이벤트대생), 2.함수(window) , 3객체(객체자신)
//				 3.
//              const obj = {
//					name:'홍길동","
//                  age : 20,            
//				showInfo(){
//	               return '이름은 ' + this.name + ', 나이는 ' + this.age;}
//              }			
//               2.	
//	             let checkVal =this.checked;
//               function(item){ 함수에서의 this -> windows 객체
//                  	item.children[5].children[0].checked = checkVal; 이 체크 값으로 변경
//               }

 
 function removeMemberFnc(){
	let targetTr = document.querySelectorAll('#memberList tr');
	for ( let tr of targetTr){
//		console.log(tr.children[5]);
//		console.log(tr.children[5].children[0]);
//		console.log(tr.children[5].children[0].checked);
		
		if(tr.children[5].children[0].checked == true){
			tr.remove();
		}
		//tr.children[5]
	}
 }
 
 function addMemberFnc(){
	const id = document.getElementById('mid').value;
	const name = document.getElementById('mname').value;
	const phone = document.getElementById('mphone').value;
	const point = document.getElementById('mpoint').value;
	
	if(!id || !name || !phone || !point){
		alert('필수값을 입력.')
		return;
	}
	
	document.getElementById('memberList')
	        .appendChild(addRow({id,name,phone,point}));
 
 
 	document.getElementById('mid').value = "";
 	document.getElementById('mname').value = "";
 	document.getElementById('mphone').value = "";
 	document.getElementById('mpoint').value = "";
 }  // end of addMemberFnc();
 
 function addRow(member = {id,name,phone,point}){
	//tr > td * 4
	const tr = document.createElement('tr');
	tr.addEventListener('click',showDetailFnc);
	
	for(let prop in member){
		const td = document.createElement('td');
		td.innerHTML = member[prop];
		tr.appendChild(td);	
	}
	//삭제버튼 생성
	//<td><button>삭제</button></td>
	
	let td = document.createElement('td');
	let btn = document.createElement('button');
	
	btn.setAttribute('class','btn btn-primary');
//	btn.addEventListener('click',function(){ //온클릭
//		td.parentElement.remove();
//	});

	btn.addEventListener('click',removeEventListener);
	btn.innerHTML = '삭제';
 	
 		
	td.appendChild(btn);
	tr.appendChild(td);
	
	td = document.createElement('id');
	btn = document.createElement('input');
	btn.setAttribute('type','checkbox');
	btn.addEventListener('click',allCheckFnc)
	td.appendChild(btn);
	tr.appendChild(td);
	
	return tr;
	
 }
 
 function showDetailFnc(e){ // 클릭하면 위에 정보로 입력되는
 	//tr의 자식요소의 값 입력 input에 반환

	//console.log(this);
	//console.dir(this);
	//console.dir(this.children[0].innerText);
	//console.log('tr',e);
	
 	document.getElementById('mid').value = this.children[0].innerText;
 	document.getElementById('mname').value = this.children[1].innerText;
 	document.getElementById('mphone').value = this.children[2].innerText;
 	document.getElementById('mpoint').value = this.children[3].innerText;
 }
 
 function modMemberFnc(){
	let targetTr = document.querySelectorAll('#memberList tr');
	//입력 화면의 회원 아이디 값을 가져와서 mid 변수저장
	let mid = document.getElementById('mid').value;
	let mname = document.getElementById('mname').value;
	let phone = document.getElementById('mphone').value;
	let point = document.getElementById('mpoint').value;
		
	for(let tr of targetTr){
//		console.log(tr.children[0].innerText);
				
		if(tr.children[0].innerHTML == mid){
			tr.children[1].innerHTML = mname;
			tr.children[2].innerHTML = phone;
			tr.children[3].innerHTML = point;
		}		
	}
 }
 
//이벤트 헨들러.
function removeEventListener(e){
	console.log('btn',e);
	e.stopPropagation();//상위요소로 이벤트전파 차단
	this.parentElement.parentElement.remove();
}