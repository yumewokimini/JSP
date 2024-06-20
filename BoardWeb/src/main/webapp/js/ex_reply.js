/**
 * 
 */

 //댓글 -> li 생선
 /**
 function makeRow(reply = {}){
	let fields = ['replyNo','reply','replyer','replyDate'];
	let li = document.createElement('li');
	fields.forEach(field => {
		let span = document.createElement('span');
		span.innerHTML = reply[field];
		if(field == 'reply'){
			width = '4';
		}else if(field == 'replyDate'){
			width = '3';
		}else {
			width = '2';
		}
		span.setAttribute('class','col-sm-'+width);
		li.appendChild(span);
	})
	return li;
 }
  */
 
 function cloneRow(reply = {}){
	document.querySelector('div.content>ul>li:nth-of-type(3)').setAttribute('did',reply.replyNo);
	let template = document.querySelector('div.content>ul>li:nth-of-type(3)').cloneNode(true); //복제	
//	console.log(template); 
	template.style.display = 'block';
	template.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo;
	template.querySelector('span:nth-of-type(2)').innerHTML = reply.reply;
	template.querySelector('span:nth-of-type(3)').innerHTML = reply.replyer;
	template.querySelector('span:nth-of-type(4)').innerHTML = reply.replyDate;
//	template.querySelector('span:nth-of-type(5) > button').setAttribute('did',reply.replyNo);
	
	return template;
 }
 
  function deleteRow(e){
	console.log('3');
	console.log(e.target.parentNode.getAttribute('did'));
	
 }
 /*
 function deleteRow(e){
	let did = e.target.getAttribute('did');
	let li = e.target.parentNode.parentNode;
	const delAjax = new XMLHttpRequest();
	delAjax.open('get','removerReply.do?rno='+did);
	delAjax.send();
	delAjax.onload = function(){
		let result = JSON.parse(delAjax.responseText);
		if(result.retCode == "OK"){
			alert('삭제');
			li.remove();
		}
	}
	console.log(did);
	
 }
 */
 //cloneRow();
 
 
 const listAjax = new XMLHttpRequest();
 listAjax.open('get','replyListJson.do?bno=' + bno);
 listAjax.send();
 listAjax.onload = function(){
	let date = JSON.parse(listAjax.responseText);
/*	console.log(date);*/
	date.forEach(reply => {
		//document.querySelector('div.content>ul').appendChild(makeRow(reply));
		document.querySelector('div.content>ul').appendChild(cloneRow(reply));
	})
 }