/**
 * 
 */

/*
 svc.replyList(bno, function(){
	let data = JSON.parse(this.responseText);
	console.log(data);
	 });
 */
 svc.replyList(bno, replyListFnc);
 
 //댓글 등록 이벤트.
 document.getElementById('addreply').addEventListener('click',addReplyFnc);
 
 //등록실행 함수. bno,
 function addReplyFnc(){
	
	if(!replyer){
		alert('로그인하세요');
		return;
	}
	
	let reply = document.getElementById('reply').value;
	if(!reply){
		alert('댓글을 등록하세요!!');
		return;
	}
	
	
	svc.addReply({replyer, reply, bno},addReplyCallback);//객체,실행할 함수	
	
 }//end of addReplyFnc();
 function addReplyCallback(){
//	console.log(this.responseText);
	let result = JSON.parse(this.responseText);
	if(result.retCode == 'OK'){
		alert('등록성공!!');
		let li = cloneRow(result.retVal);
		document.querySelector('div.content>ul').appendChild(li);
		document.getElementById('reply').value='';
	}else{
		alert('실패 =>' + result.retVal)
	}
 }
 
 
 //replyList의 매개값으로 사용될 함수.
 function replyListFnc(){
	let data = JSON.parse(this.responseText);
//	console.log(data);
	data.forEach(reply => {
		let li = cloneRow(reply);
		document.querySelector('div.content>ul').appendChild(li);
	})
}

 function cloneRow(reply = {}){
//	document.querySelector('div.content>ul>li:nth-of-type(3)').setAttribute('id',reply.replyNo);
	let li = document.querySelector('div.content>ul>li:nth-of-type(3)').cloneNode(true); //복제	
//	console.log(template); 
	li.style.display = 'block';
	li.setAttribute('id',reply.replyNo);
	li.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo;
	li.querySelector('span:nth-of-type(2)').innerHTML = reply.reply;
	li.querySelector('span:nth-of-type(3)').innerHTML = reply.replyer;
	li.querySelector('span:nth-of-type(4)').innerHTML = reply.replyDate;
	
	return li;
 }	

 function deleteRow(e){
	let li = e.target.parentElement.parentElement;
	let rno = li.getAttribute('id');
	
	svc.rmoverReply(rno, deleteReplyFnc);
	//removeReply 메소드의 매개값으로 전달될 함수, 화면에서 한건 지우기
	function deleteReplyFnc(){
		let result = JSON.parse(this.responseText);//삭제
		
		if(result.retCode == 'OK'){
			alert(result.retMsg);	
			document.getElementById(rno).remove();
		}else {
			alert('Error=>'+result.retMsg);
		}
		
	}
	
 }