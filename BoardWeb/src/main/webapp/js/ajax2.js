/**
 * ajax2.js
 * XMLHttpRequest 객체
 */

 const xhtp = new XMLHttpRequest();
 xhtp.open('get','data/MOCK_DATA.json');
 xhtp.send();
 xhtp.onload = function(){
//	console.log(xhtp);

//	console.log(xhtp.responseText);

	let data = JSON.parse(xhtp.responseText); // json -> 문자열을 객체
//	console.log(data);
//  DOM 활용해서 페이지 작성.
	data.forEach(function(emp){
		console.log(emp);
		document.getElementById('list').appendChild(makeRow(emp));
	});
}

let fields = ['id','first_name', 'email', 'salary'];
function makeRow(obj = {}){
	let tr = document.createElement('tr');
	fields.forEach(field => {
		let td = document.createElement('td');
		td.innerHTML = obj[field];
		tr.appendChild(td);
	})
	return tr;
}

 //----------------------------------------------------------------------------------------------
 //다른 페이지 가져옴 많이는 안씀
 const xhtm = new XMLHttpRequest();
 xhtm.open('get','loginForm.do');
 xhtm.send();
 xhtm.onload = function(){
	console.log(xhtm);
	//document.getElementById('show').innerHTML = xhtm.responseText;

 }
 
 
console.log('end');