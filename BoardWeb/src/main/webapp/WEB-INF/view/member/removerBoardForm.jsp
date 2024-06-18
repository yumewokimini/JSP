<%@page import="java.text.SimpleDateFormat"%>
<%@page import="co.yedam.vo.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


<%
	BoardVO board = (BoardVO) request.getAttribute("board");
%>

<script>
	if(confirm("삭제하시겠습니까?")){
		location.href='removerBoard.do?bno=<%=board.getBoardNo()%>';
	}else{
		location.href='getBoard.do?bno=<%=board.getBoardNo()%>';
	}
</script>







