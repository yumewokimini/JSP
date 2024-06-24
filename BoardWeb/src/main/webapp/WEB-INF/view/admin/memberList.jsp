<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- memberList.jsp -->
<h3>회원목록(관리자용)</h3>

<ul>
	<c:forEach var="member" item="${memberList}">
	<li> id: ${member.userId}<img  width='200px' src='images/${member.image}'>
	
	
	<!-- ${!empty member.image ? '<img width = "200px" src="images/"+member.image}+">' :''} -->
	</li>
	</c:forEach>
</ul>