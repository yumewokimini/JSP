/**
 *  ajax3
 */

 const xthp = new XMLHttpRequest();
 xthp.open('get','membersAjax.do');
 xthp.send();
 xthp.onload = function(){
 	//console.log(xthp);
	let data = JSON.parse(xthp.responseText);
	data.forEach(user => {
		document.getElementById('list').appendChild(makeRow(user));
		
	})
 	
 }
   
 // 등록이벤트
 document.getElementById('addBtn').addEventListener('click',function(){
	const formData = new FormData(); // form-data 처리
	const fileField = document.querySelector('#myPic');
	
	formData.append("id", document.getElementById('uid').value);
	formData.append("pass1", document.getElementById('upw').value);
	formData.append("name", document.getElementById('uname').value);	
	formData.append("myImage", fileField.files[0]);

	upload(formData);	
 })
 
//fetch 파일 업로드
 
 
 async function upload(formData) {
  	try {
  		const response = await fetch("adduser.do", {
 	    	method: "PUT",
  	    	body: formData,
  	  	});
  	  		const result = await response.json();
	    	if(result.retCode == 'OK'){
	    	console.log("성공:", result);
				
			}
	    	
	   		let id = document.getElementById('uid').value;
			let pw = document.getElementById('upw').value;
			let um = document.getElementById('uname').value;
			let auth = document.getElementById('auth').value;
	    	let newMem = {userId:id,userName:um, userPw: pw,responsibility: auth}

  	 	 	
//  	 	 	let newMem = result.
  	 	 	document.getElementById('list').appendChild(makeRow(newMem));
	} catch (error) {
 		console.error("실패:", error);
	}
} //end odf upload(formdata)


 
 
 
 
 
 
 
 
 //등록이벤트 임시 함수 저장소.
 
 function addMemberFunc(){
	let id = document.getElementById('uid').value;
	let pw = document.getElementById('upw').value;
	let um = document.getElementById('uname').value;
	let auth = document.getElementById('auth').value;
	
	const addAjax = new XMLHttpRequest();
	let url = 'addAjax.do?id='+id+'&pw='+pw+'&um='+um+'&auth='+auth;
	addAjax.open('get',url);
	addAjax.send();
	addAjax.onload = function(){
		let result = JSON.parse(addAjax.responseText);
		if(result.retcode == 'OK'){
			let newMem = {userId:id,userName:um, userPw: pw,responsibility: auth}
			alert(result.retMsg);
			document.getElementById('list').appendChild(makeRow(newMem));
			
			
		}else{
			alert('실패');
		}
	}
 }
 
 
 // id 체크 이벤트
 document.getElementById('uid').addEventListener('change',function(){
	let checkId = this.value;
	
	const checkAjax = new XMLHttpRequest();
	checkAjax.open('get','checkIdAjax.do?id=' + checkId);
	checkAjax.send();
	checkAjax.onload = function(){
		let result = JSON.parse(checkAjax.responseText);
		if(result.retCode == 'Exist'){
			alert('이미 존재하는 아이디입니다.');
			document.querySelector('#addBtn').disabled = true;
		}else{
			alert('등록 가능한 아이디입니다.');
			document.querySelector('#addBtn').disabled = false;
		}
	}
 })
 
 
 
 
 //json 문자열의 필드이름 활용
 //const fields = ['userId','userName','userPw','Responsibility']; //MemberAjax 에서 for 구문에서 녹색부분
 const fields = ['userId','userName','image','Responsibility']; //MemberAjax 에서 for 구문에서 녹색부분
 function makeRow(obj = {}){
	let tr = document.createElement('tr');
	tr.setAttribute('id', obj.userId); // tr id =user01
	
	
	tr.addEventListener('dblclick',function(e){
		document.getElementById('myModal').style.display = 'block';
		//선택된 사용자의 이름, 버번을 모달에 출력.
		//console.log(e,this);
		document.getElementById('modify_id').value=//
			this.children[0].innerHTML;
		document.getElementById('modify_name').value=//
			this.children[1].innerHTML;
		document.getElementById('modify_pass').value=//
			this.children[2].innerHTML;
//		document.getElementById('image').value=//
//			this.children[2].innerHTML;
		//let img = document.getElementById('image').Value;
		//console.log(img);
		
		//value=//
		//	this.children[2].innerHTML;

	})
	
	fields.forEach(field => {
		let td = document.createElement('td');
		td.innerHTML = obj[field];
		tr.appendChild(td);
	})
		let td = document.createElement('td');
		let btn = document.createElement('button');
		
		btn.setAttribute('class', 'btn btn-primary');
		btn.setAttribute('data-delId', obj.userId);
		//td.innerHTML = '삭제';
		btn.addEventListener('click',removeMemberFnc);
		btn.innerHTML = '삭제';
		td.appendChild(btn);
		tr.appendChild(td);
		//let btnText = document.createTextNode('삭제');
	    //btn.appendChild(btnText);
	    //tr.appendChild(btn);
	    
	    //document.activeElement("list").addEventListener('click',function(){
		//	const parent = document.getElementById('parent');
		//	parent.remove();	
		//})
	return tr;
}

function removeMemberFnc(e){
	let did = this.getAttribute('data-delId'); 
	console.log(did);
	let tr = document.document(did); 
	console.log(tr);
	// 누르시점에 user03
	// let did = this.dataset.delId;
	// did = e.target.parentElement.parentElement.children[0].innerHTML;	
	
	const delAjax = new XMLHttpRequest();
	delAjax.open('get','delAjax.do?id=' + did);
	delAjax.send();
	delAjax.onload = function(){
		let result = JSON.parse(delAjax.responseText);
		if(result.retCode == 'OK'){
			alert('정상삭제');
			tr.remove();
		}
	}
}

 document.getElementById('modBtn').addEventListener('click',function(){
		let id = document.getElementById('modify_id').value;
		let pass = document.getElementById('modify_pass').value;
		let name = document.getElementById('modify_name').value;
		
		// ajax 생성
		// 정상적으로 정보가 업데이트 되면 화면수정
		// 수정이 안됏으며 화면 수정 x

		let url = 'inputAjax.do?id='+id+'&pw='+pass+'&name='+name;
		const inputAjax = new XMLHttpRequest();
		inputAjax.open('get',url);
		inputAjax.send();
		inputAjax.onload = function(){
		let result = JSON.parse(inputAjax.responseText);
			if(result.retCode == 'OK'){
				alert('성공');
			}else{
				alert('실패');
			}
		}
		let targetTr = document.getElementById(id);
		targetTr.children[1].innerHTML = name;
		targetTr.children[2].innerHTML = pass;
		
		document.getElementById('myModal').style.display = 'none';
		
})
   
