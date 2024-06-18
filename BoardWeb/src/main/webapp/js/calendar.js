/**
 *  calendar.js
 */

 document.querySelectorAll('.container-fluid h3') //NodeList
 	.forEach(item => item.remove());
 	
 document.querySelectorAll('.container-fluid table.table') //NodeList table 태그 안의 table을 삭제
 	.forEach(item => item.remove());
 
 document.getElementById('fruit').remove();
 	
 // 달력을 만들기 1. 첫쨋날 위치 확인하기 ,마지막날 계산 함수
 
 function getFirstDay(){
	return 7;
 }
 
 function getLastDate(){
	return 30;
 }
 
 function makeCalender(){
	//table 생성.border="2"
	let tbl = document.createElement('table');
	
 }