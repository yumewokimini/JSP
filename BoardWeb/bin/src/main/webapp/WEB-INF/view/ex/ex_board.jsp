<%@page import="java.text.SimpleDateFormat"%>
<%@page import="co.yedam.vo.BoardVO"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>



<%
    String paging = (String) request.getAttribute("page");
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-mm-dd HH:mm:ss");
	BoardVO board = (BoardVO) request.getAttribute("board");
	String yyyymmdd = sdf.format(board.getCreationDate());
	
	String loginId = (String) session.getAttribute("logId");
%> 

<p>${board }</p>


<p>%=board %></p>
<form name="myFrm" action ="removeForm.do"> 

	<input type="hidden" value="${board.boardNo }<!--%=board.getBoardNo() %>" name="bno"> 
	<table class="table" class="col-sm-10">
	<tr>
		<th class="col-sm-1">글번호</th>
		<td class="col-sm-3"><%=board.getBoardNo() %></td>
		<th class="col-sm-1">조회수</th>
		<td class="col-sm-3"><%=board.getClickcnt() %></td>
	</tr>
	<tr>
		<th>제목</th><td colspan="3"><%=board.getTitle() %></td>
	</tr>
		<tr>
		<th>내용</th>
		<td colspan="3"><%=board.getContent()%></td>
		<td colspan="3">
		 <textarea readonly cols="80" rows="3"><%=board.getContent()%></textarea>
		</td>
	</tr>
	<tr>
		<th>작성자</th>
		<td colspan="3"><%=board.getWriter() %></td>
	</tr>
	<tr>
		<th>작성일시</th><td colspan="3"><%=yyyymmdd %></td>
	</tr>
	<tr align="center">
	 <td colspan="3">
 	 	<button type="submit" id="del" class="btn btn-secondary">수정</button> 
	 	<button type="button" id="del" class="btn btn-secondary" onclick="location.href='modifyForm.do?bno=<%=board.getBoardNo()%>'">수정</button>
	 	<%if(loginId != null && loginId.equals(board.getWriter())){%>
	 		<button type="button" class="btn btn-secondary" onclick="location.href='modifyForm.do?bno=<%=board.getBoardNo()%>'">수정</button>
	 		<button type="button" class="btn btn-secondary" onclick="location.href='removerForm.do?bno=<%=board.getBoardNo()%>&page=%=paging%>'">삭제</button>
	 	<%}else{ %>
	 		<button type="button" disabled class="btn btn-secondary" onclick="location.href='modifyForm.do?bno=<%=board.getBoardNo()%>'">수정</button>
	 		<button type="button" disabled class="btn btn-secondary" onclick="location.href='removerForm.do?bno=<%=board.getBoardNo()%>&page=<%=paging%>'">삭제</button>
	 	<%} %>
	 </tr>
	</table>
</form>
 
<script>
	document.querySelector('#del')
	           .addEventListener('click',function(e) {
	//삭제화면이동 경우에는 removeForm.do
	//수정화면 이동으로 처리 할 경우에는 action ="modifyForm.do";
				document.forms.myFrm.action = "modifyForm.do";
				document.forms.myFrm.submit();	        	    
	           });
</script>



	<input type="button" class="btn btn-primary" value="목록으로 이동" onclick="location.href='boardList.do?page=<%=paging%>'">

