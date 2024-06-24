<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<h3>회원등록</h3>
<form action="adduser.do" method="post" enctype="multipart/form-data">
<table class="table">
	<tr>
		<th>아이디</th>
		<td><input type="text" name="id"></td>
	</tr>
	<tr>
		<th>비밀번호</th>
		<td><input type="text" name="pass1"></td>
	</tr>
	<tr>
		<th>비밀번호 재확인</th>
		<td><input type="text" name="pass2"></td>
	</tr>
	<tr>
		<th>이름</th>
		<td><input type="text" name="name"></td>
	</tr>
	<tr>
		<th>이미지</th>
		<td><input class="form=control" type="file" name="myImage"></td>
	</tr>
</table>
<td colspan="2" align="center">
<input type="submit" class="btn btn-primary" value="저장">
</form>