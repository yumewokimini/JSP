<%@page import="co.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- modifyBoardForm.jsp -->
<h3>수정화면</h3>
<%
	BoardVO board = (BoardVO) request.getAttribute("board");
%>
<!-- <form action="modifyBoard.do"> -->
<form action="modifyBoard.do">
<input type="hidden" value = "${board.boardNo }" name="bno">
	<input type="hidden" value = "${page }" name="page">
	<input type="hidden" value="${searchCondition }" name="searchCondition">
	<input type="hidden" value="${keyword }" name="keyword">

	<table class="table">
 	 <tr>
  	  <th>글번호</th><td><input class="form-control" type="text" readonly value="<%=board.getBoardNo() %>" name="bno"></td>
  	  <th>조회수</th><td></td>
 	 </tr>
 	 <tr>
 	 	<th>제목</th><td colspan="3"><input class="form-control" type="text" value="<%=board.getTitle() %>" name="title">
 	 </td>
 	 <tr>
 	 	<th>내용</th>
 	    <td colspan="3">
 	     <textarea class="form-control" rows="" cols="" name="content"><%=board.getContent() %></textarea>
 	     </td>
 	     <tr>
 	      <th>작성자</th><td><%=board.getWriter() %></td>
 	      <th>작성일시 </th><td><%=board.getCreationDate() %></td>
 	     </tr>
 	     <tr>
 	<!--     <td colspan="2"><input class="form-control" type="submit" value="수정완료"></td> -->
 	     <td colspan="2"><button type="submit" class="btn btn-primary" onclick="location.href='modifyBoard.do?bno=${board.boardNo }&page=${page}&searchCondition=${searchCondition }&keyword=${keyword}'"> 수정 </button></td>
 	     <td colspan="2"><button type="submit" class="btn btn-primary" >수정취소</button></td><!-- 미완 -->
 	     </tr>
	</table>
</form>