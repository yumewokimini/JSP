<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<!-- memberList.jsp -->

<style>
	table,th,tr,td{
		border: 1px solid black;
		text-align: center;
	}	
</style>

<h3>회원목록(관리자용)</h3>

<table>
<!-- 회원 아이디/이름/비밀번호/이미지 -->
	<thead>
	</thead>
	<tbody>
		<tr>
			<th>회원 아이디</th>
			<th>이름</th>
			<th>비밀번호</th>
			<th>권한</th>
			<th>이미지</th>
		</tr>
			<c:forEach var="member" items="${memberList}">
			<tr>
				<td>${member.userId}</td>
				<td>${member.userPw}</td>
				<td>${member.userName}</td>
				<td>${member.responsibility}</td>
				<td>
					<c:choose>
						<c:when test="${empty member.image }">
							<img src= "" >
						</c:when>
						<c:otherwise>
							<!-- <img src="images/${member.image }"> -->
							<img  width='100px' src="${empty member.image ? '' : 'images/'.concat(member.image)}">
						</c:otherwise>
					</c:choose>
				</td>
			<tr>
				
			
		</c:forEach>
	</tbody>
	
	
	
	
	
	
	
	
	



	
</table>