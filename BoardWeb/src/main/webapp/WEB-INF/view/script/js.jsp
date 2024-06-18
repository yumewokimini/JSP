<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!--  script/js.jsp -->
<h3>자바스립트 연습</h3>




<div id ="dom">

	<ul id='fruit'>
	  <li> apple </li>
	  <li> banana </li>
	</ul>
	 
	 
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


	<select id="selectMonth">
		<option value = "1">01월</option>
		<option value = "2">02월</option>
		<option value = "3">03월</option>
		<option value = "4">04월</option>
		<option value = "5">05월</option>
		<option value = "6">06월</option>
		<option value = "7">07월</option>
		<option value = "8">08월</option>
		<option value = "9">09월</option>
		<option value = "10">10월</option>
		<option value = "11">11월</option>
		<option value = "12">12월</option>
	</select>
</div>

<table class="table">
	<tr>
		<th>사번</th><td><input id="id"></td>
	</tr>
	<tr>
		<th>사원명</th><td><input id="first_name"></td>
	</tr>
	<tr>
		<th>이메일</th><td><input id="email"></td>
	</tr>
	<tr>
		<th>급여</th><td><input id="salary"></td>
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
			<th>사번</th>
			<th>이름(firstname)</th>
			<th>이메일</th>
			<th>급여</th>
		</tr>
	</thead>
	
	<tbody id ="list"></tbody>
</table>

<div id = "show">

</div>

<script src="js/data.js"></script>
<!-- <script src="js/dom1.js"></script> -->
<!-- <script src="js/func1.js"></script> -->
<!-- <script src="js/calendar.js"></script>  -->
<!--<script src="js/ary2.js"></script>-->
<script src="js/obj1.js"></script>


