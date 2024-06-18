/**
 *  calendar.js
 */

 document.querySelectorAll('.container-fluid h3') //NodeList
 	.forEach(item => item.remove());
 	
 document.querySelectorAll('.container-fluid table.table') //NodeList table 태그 안의 table을 삭제
 	.forEach(item => item.remove());
 
 //document.getElementById('fruit').remove();

 // 달력을 만들기 1. 첫쨋날 위치 확인하기 ,마지막날 계산 함수
  document.getElementById("selectMonth").addEventListener('change', function(){
	 makeCalendar(parseInt(this.value)); 
 });
  
 function getFirstDay(Month){ // 시작지점
	switch(Month){
		case 1:
		case 7:
			return 2;
		case 2:
		case 8:
			return 5;	
		case 3:
		case 11:
			return 6;
		case 4:
			return 2;
		case 5:
			return 4;
		case 9:
		case 12:
			return 1;
		case 10:
			return 3;
		case 6:
			return 7;
	}
 }
 
 function getLastDate(Month){ // 날짜 총 갯수
	switch(Month){
		case 2:
			return 29;
		case 4:
		case 6:	
		case 9:
		case 11:	
			return 30;
		case 1:
		case 3:	
		case 5:
		case 7:
		case 8:	
		case 10:	
		case 12:	
			return 31;
	}
 }
 
 function makeCalendar(Month){
	//table 생성.border="2"
	//let FirstDay = getFirstDay(Month); //1일의 위치
	//let LastDate = getLastDate(Month); //요일
	
	document.getElementById('show').innerHTML = ''; // 빈공간
	 
	let tbl = document.createElement('table');
	tbl.setAttribute('class','table');
	let thd = document.createElement('thead');
	let tbd = document.createElement('tbody');
	
	let days = ['Sum','Mon','Tue','Web','Thr','Fri','Set'];
	let tr = document.createElement('tr');
	days.forEach(day => {
		let th = document.createElement('th'); //태그가 th
		th.innerHTML = day;
		tr.appendChild(th);	
	})
	thd.appendChild(tr);
	
	//tbody 하위 요소
	tr = document.createElement('tr');
	// 빈날짜
	for(let i =1; i<getFirstDay(Month); i++){
		let td = document.createElement('td');
		tr.appendChild(td);
	}
	
	// 날짜 출력.
	for(let d = 1; d <= getLastDate(Month); d++){
		let td = document.createElement('td'); // 태크가 td
		td.innerHTML = d;
		tr.appendChild(td);
		
		if ((d+getFirstDay(Month)-1) % 7 == 0){ //7일마다 줄바꿈
			td.style.color='blue';	
			tbd.appendChild(tr);
			tr =  document.createElement('tr');
					
		}else if((d+getFirstDay(Month)-1) % 7 == 1){
			td.style.color='red';
		}
		
	}
	tbd.appendChild(tr);
	tbl.appendChild(thd);
	tbl.appendChild(tbd);
	document.getElementById('show').appendChild(tbl);
	
 }

 makeCalendar(6);