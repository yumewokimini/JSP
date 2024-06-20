<%@page import="ch.qos.logback.core.net.SyslogOutputStream"%>
<%@page import="co.yedam.vo.BoardVO"%>
<%@page import="ch.qos.logback.core.recovery.ResilientSyslogOutputStream"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>


<h3>게시판 등록</h3>

<% 
    String msg = (String) request.getAttribute("message"); 
	String loginId = (String) session.getAttribute("logId");
%>
 
<%
	if (msg != null){ 
%> 
	<p>%= msg %></p>

<%} %>

 

<form action="addBoard.do">
<table class="table">
	<tr>
		<th>제목</th><td><input type="text" name="title" required></td>
	</tr>
	<tr>
		<th>내용</th><td><textarea name="content" cols="30" rows="10" required></textarea></td>
	</tr>
	<tr>
		<th>작성자</th><td><input type="text" name="writer" required value="<%=loginId %>" readonly="readonly"></td>
	</tr>
	<td colspan="2" align="center">
	
	 <c:choose>
	 	<c:when test="${logId == board.writer}">
			<input type="submit" class="btn btn-primary" value="저장"><!-- danger , warring -->
		</c:when>
		<c:otherwise>
			<input type="submit" disabled class="btn btn-primary" value="저장"><!-- danger , warring -->
		</c:otherwise>
	 </c:choose>
	
	</td>
</table>
</form>

 
