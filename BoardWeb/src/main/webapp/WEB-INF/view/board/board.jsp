<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
 <!-- div 밑의 div -->
<style>
	div.reply div {
		margin: auto;
	}
	div.reply ul{
		list-style-type: none;
		margin-top: 3px;
	}
	div.reply li{
		padding-top: 1px;
		padding-bottom: 1px;
	}
	div.reply span{
		display: inline-block;
	}
</style>


<form>
     <input type="hidden" value="${board.boardNo }" name="bno">
     <input type="hidden" value="${page }" name="page">
	 <input type="hidden" value="${searchCondition }" name="searchCondition">
	 <input type="hidden" value="${keyword}" name="keyword">

	
	<table class="table" class="col-sm-10">
	<tr>
		<th class="col-sm-1">글번호</th>
		<td class="col-sm-3"><c:out value="${board.boardNo}"/></td>
		<th class="col-sm-1">조회수</th>
		<td class="col-sm-3"><c:out value="${board.clickcnt}"/></td>
	</tr>
	<tr>
		<th>제목</th><td colspan="3"><c:out value="${board.title}"/></td>
	</tr>
		<tr>
		<th>내용</th>
		<td colspan="3">
		  <textarea readonly cols="80" rows="3"><c:out value="${board.content}"/></textarea>
		</td>
	</tr>
	<tr>
		<th>작성자</th>
		<td colspan="3"><c:out value="${board.writer}"/></td>
	</tr>
	<tr>
		<th>작성일시</th><td colspan="3"><fmt:formatDate pattern="yyyymmdd" value="${board.creationDate }"/></td>
	</tr>
	<tr align="center">
	 <td colspan="3">
	 <c:choose>
	 	<c:when test="${!empty logId && logId == board.writer}">
	 		<button type="button" class="btn btn-secondary" onclick="location.href='modifyForm.do?bno=${board.boardNo}&page=${page}&searchCondition=${searchCondition }&keyword=${keyword}'">수정</button>
	 		<button type="button" class="btn btn-secondary" onclick="location.href='removerBoardForm.do?bno=${board.boardNo}'">삭제</button>	
	 	</c:when>
	 	<c:otherwise>
	 		<button type="button" disabled class="btn btn-secondary" onclick="location.href='modifyForm.do?bno=${board.boardNo}&page=${page }&searchCondition=${searchCondition }&keyword=${keyword}'">수정</button>
	 		<button type="button" disabled class="btn btn-secondary" onclick="location.href='removerBoardForm.do?bno=${board.boardNo}'">삭제</button>
	 	</c:otherwise>
	 </c:choose>

	<input type="button" class="btn btn-primary" value="목록으로 이동" onclick="location.href='boardList.do?page=${page}'">
	 </tr>
	</table>
<!-- 댓글 관련 끝. -->
</form>	
	
<!-- 댓글 관련 시작. -->
<div class="container reply">

	<div class="header">
		<input class="col-sm-8" id = "reply">
		<button class="btn btn-primary" class="col_sm-3" id ="addreply" >등록</button>
	</div>

	<div class="content">
		<ul>
			<li>
				<span class="col-sm-1">글번호</span>
				<span class="col-sm-4">글내용</span>
				<span class="col-sm-2">작성자</span>
				<span class="col-sm-3">작성일</span>
				<span class="col-sm-1">삭제</span>
			</li>
			<li><hr/></li><!-- hr은 수평선 -->
			<li style="display:none">
				<span class="col-sm-1">3</span>
				<span class="col-sm-4">ㅋ</span>
				<span class="col-sm-2">user01</span>
				<span class="col-sm-3">2024.06.20</span>
				
			<!--	<span class="col-sm-1"><button  class="btn btn-danger" onclick="deleteRow(event)">삭제</button></span> -->
   
   
   				 <c:choose>
	 				<c:when test="${!empty logId && logId == board.writer}">
						<span class="col-sm-1"><button  class="btn btn-danger" onclick="deleteRow(event)">삭제</button></span>
					</c:when>
					<c:otherwise>
						<span class="col-sm-1"><button disabled class="btn btn-danger" onclick="deleteRow(event)">삭제</button></span>
					</c:otherwise>
				 </c:choose>
			
			
			</li>
		</ul>
	</div>
	
	
</div>


<script>
	const bno = "${board.boardNo}";
	const replyer = "${logId}";
	
</script>

<script src="js/replyService.js"></script> 
<script src="js/reply.js"></script>

