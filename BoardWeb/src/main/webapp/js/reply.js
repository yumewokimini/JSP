/**
 * 
 */

/*
 svc.replyList(bno, function(){
	let data = JSON.parse(this.responseText);
	console.log(data);
	 });
 */

let page = 1;
svc.replyList({ bno, page }, replyListFnc);

//댓글 등록 이벤트.
document.getElementById('addreply').addEventListener('click', addReplyFnc);

// 페이징 a 태그를 클릭하면 목록 보여주기.
document.querySelectorAll('div.pagination a').forEach(item => {
	item.addEventListener('click', function(e) {
		e.preventDefault(); //페이지 이동의 기능을 차단 후 실행하겠습니다.
		
		
		page = item.innerHTML; 
	})
});


//댓글 건수를 활용해서 페이징 계산하고 목록 출력.
function makePagingFnc() {
	svc.replyTotalCnt(bno, createPagingList);

}
////////////////////////////////////
let pagination = document.querySelector('div.pagination');

function createPagingList() {
	let totalCnt = this.responseText;//총 댓글 갯수
	console.log(totalCnt);//632건 /5 => 127page
	let startPage, endPage;
	let prev, next;
	let realEnd = Math.ceil(totalCnt / 5); //127페이지

	endPage = Math.ceil(page / 10) * 10; //10page
	startPage = endPage - 9;
	endPage = endPage > realEnd ? realEnd : endPage;

	prev = startPage > 1;
	next = endPage < realEnd;

	//startPage, end Page,prev,next => a태그 생성.
	pagination.innerHTML = '';

	if (prev) {//이전페이지
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page',startPage-1);
		aTag.setAttribute('href', '#');
		aTag.innerHTML = "&laquo;";
		pagination.appendChild(aTag);
	}
	for (let p = startPage; p <= endPage; p++) {
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page',p);
		aTag.setAttribute('href', '#');
		aTag.innerHTML = p;
		if (page == p) {
			aTag.className = 'active';
		}
		pagination.appendChild(aTag);
	}

	if (next) {//이전페이지
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page',endPage+1);
		aTag.setAttribute('href', '#');
		aTag.innerHTML = "&raquo;";
		pagination.appendChild(aTag);
	}


	document.querySelectorAll('div.pagination a').forEach(item => {
		item.addEventListener('click', function(e) {
			e.preventDefault(); //페이지 이동의 기능을 차단 후 실행하겠습니다.
			page = item.dataset.page;
			svc.replyList({ bno, page }, replyListFnc);
		})
	});

}


//등록실행 함수. bno,
function addReplyFnc() {

	if (!replyer) {
		alert('로그인하세요');
		return;
	}

	let reply = document.getElementById('reply').value;
	if (!reply) {
		alert('댓글을 등록하세요!!');
		return;
	}


	svc.addReply({ replyer, reply, bno }, addReplyCallback);//객체,실행할 함수	

}//end of addReplyFnc();
function addReplyCallback() {
	//	console.log(this.responseText);
	let result = JSON.parse(this.responseText);
	if (result.retCode == 'OK') {
		alert('등록성공!!');
		let li = cloneRow(result.retVal);
		document.querySelector('div.content>ul').appendChild(li);
		document.getElementById('reply').value = '';
		//댓글 맨위에 감..
		page=1;
		svc.replyList({bno, page }, replyListFnc);
		
		//
	} else {
		alert('실패 =>' + result.retVal)
	}
}


//replyList의 매개값으로 사용될 함수.
function replyListFnc() {
	//5개 댓글을 지워주고 출력
	document.querySelectorAll('div.content>ul>li').forEach((item, idx) => {
		if (idx > 2) {
			item.remove();
		}
	});

	let data = JSON.parse(this.responseText);

	//	console.log(data);
	data.forEach(reply => {
		let li = cloneRow(reply);
		document.querySelector('div.content>ul').appendChild(li);
	})

	makePagingFnc();
}





function cloneRow(reply = {}) {
	//	document.querySelector('div.content>ul>li:nth-of-type(3)').setAttribute('id',reply.replyNo);
	let li = document.querySelector('div.content>ul>li:nth-of-type(3)').cloneNode(true); //복제	
	//	console.log(template); 
	li.style.display = 'block';
	li.setAttribute('id', reply.replyNo);
	li.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo;
	li.querySelector('span:nth-of-type(2)').innerHTML = reply.reply;
	li.querySelector('span:nth-of-type(3)').innerHTML = reply.replyer;
	li.querySelector('span:nth-of-type(4)').innerHTML = reply.replyDate;

	return li;
}

function deleteRow(e) {
	let li = e.target.parentElement.parentElement;
	let rno = li.getAttribute('id');

	svc.rmoverReply(rno, deleteReplyFnc);
	//removeReply 메소드의 매개값으로 전달될 함수, 화면에서 한건 지우기
	function deleteReplyFnc() {
		let result = JSON.parse(this.responseText);//삭제

		if (result.retCode == 'OK') {
			alert(result.retMsg);
			document.getElementById(rno).remove();
			svc.replyList({bno, page }, replyListFnc);
			
		} else {
			alert('Error=>' + result.retMsg);
		}

	}

}