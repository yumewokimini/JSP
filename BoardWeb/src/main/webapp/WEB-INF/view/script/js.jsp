<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!--  script/js.jsp -->
<h3>자바스립트 연습</h3>
 <!--
<ul id='fruit'>
  <li> apple </li>
  <li> banana </li>
</ul>
 -->
 
<table class="table">
	<tr>
		<th>회원아이디</th><td><input id="mid"></td>
	</tr>
	<tr>
		<th>회원이름</th><td><input id="mname"></td>
	</tr>
	<tr>
		<th>회원연락처</th><td><input id="mphone"></td>
	</tr>
	<tr>
		<th>회원점수</th><td><input id="mpoint"></td>
	</tr>
	<tr>
		<td colspan="2">
		<button id="addBtn" class="btn btn-primary">추가</button>
		<button id="modBtn" class="btn btn-primary">수정</button>
		<button id="delBtn" class="btn btn-primary">선택삭제</button>
		</td>
	</tr>		
</table>

<table class="table">
	<thead>
		<tr>
			<th>아이디</th>
			<th>이름</th>
			<th>연락처</th>
			<th>포인트</th>
			<th>삭제</th>
			<th><input type="checkbox"></th>
		</tr>
	</thead>
	<tbody id="memberList"></tbody>
</table>

<div id = "show">
	<table border="2">
		<thead>
		  <tr>
		    <th>Sum</th>
		    <th>Mon</th>
		    <th>Sat</th>
		 </tr>
		</thead>
	<tbody>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>1</td>
		</tr>
		<tr>
			<td>2</td>
			<td>3</td>
			<td>4</td>
			<td>5</td>
			<td>6</td>
			<td>7</td>
			<td>8</td>
		</tr>	
		
	</tbody>
		    
	</table>
</div>

<script src="js/data.js"></script>
<!-- <script src="js/dom1.js"></script> -->
<!-- <script src="js/func1.js"></script> -->
<script src="js/calendar.js"></script>

