/**
 * 
 */
 const xthp = new XMLHttpRequest();
 xthp.open('get','bookListJson.do');
 xthp.send();
 xthp.onload = function(){
	
	let data = JSON.parse(xthp.responseText);
	
	
	data.forEach(user => {
		document.getElementById('List').appendChild(makeRow(user));
		
	})
 	
 }
 
 const fields = ['bookcode','booktitle','author','company','price'];
 function makeRow(obj = {}){
	 
	let tr = document.createElement('tr');
	tr.setAttribute('id', obj.bookcode);
	
	tr.setAttribute('type','checkbox');
	
	fields.forEach(field => {
		let td = document.createElement('td');
		td.innerHTML = obj[field];
		tr.appendChild(td);

	})
		let td = document.createElement('td');
		let btn = document.createElement('button');
		
		btn.setAttribute('class', 'btn btn-primary');
		btn.setAttribute('data-delId', obj.bookcode);
		btn.addEventListener('click',deleteBook);
		
		
		
		btn.innerHTML = '삭제';
		td.appendChild(btn);
		tr.appendChild(td);
	return tr;	
 }
 
 function deleteBook(e){
	let did = this.getAttribute('data-delId'); 
	let tr = document.getElementById(did); 

	const delbook = new XMLHttpRequest();
	delbook.open('get','removeBook.do?id=' + did);
	delbook.send();
	delbook.onload = function(){
		let result = JSON.parse(delbook.responseText);
		if(result.retCode == 'OK'){
			tr.remove();
		}
	}
 }
 
 
  document.getElementById('addBtn').addEventListener('click',function(){
	let co = document.getElementById('bookcode').value;
	let name = document.getElementById('bookname').value;
	let wr = document.getElementById('bookwriter').value;
	let bc = document.getElementById('bookpublisher').value;
	let mo = document.getElementById('money').value;
	

	const addBook = new XMLHttpRequest();
	console.log(addBook);
	let url = 'addBook.do?co='+co+'&name='+name+'&wr='+wr+'&bc='+bc+'&mo='+mo;
	console.log(url);
	addBook.open('get',url);
	addBook.send();
	addBook.onload = function(){
		let result = JSON.parse(addBook.responseText);
		if(result.retcode == 'OK'){
			let newMem = {bookcode:co,booktitle:name, author: wr,company: bc,price:mo}
			console.log(newMem);
			document.getElementById('List').appendChild(makeRow(newMem));
			
			
		}else{
			alert('실패');
		}
	}
 })
 
 
