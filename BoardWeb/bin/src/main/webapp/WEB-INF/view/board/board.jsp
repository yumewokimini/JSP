<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>




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
	 	<c:when test="${logId == board.writer}">
	 		<button type="button" class="btn btn-secondary" onclick="location.href='modifyForm.do?bno=${board.boardNo}&page=${page}&searchCondition=${searchCondition }&keyword=${keyword}'">수정</button>
	 		<button type="button" class="btn btn-secondary" onclick="location.href='removerBoardForm.do?bno=${board.boardNo}'">삭제</button>	
	 	</c:when>
	 	<c:otherwise>
	 		<button type="button" disabled class="btn btn-secondary" onclick="location.href='modifyForm.do?bno=${board.boardNo}&page=${page }&searchCondition=${searchCondition }&keyword=${keyword}'">수정</button>
	 		<button type="button" disabled class="btn btn-secondary" onclick="location.href='removerBoardForm.do?bno=${board.boardNo}'">삭제</button>
	 	</c:otherwise>
	 </c:choose>

	 </tr>
	</table>
</form>
	<input type="button" class="btn btn-primary" value="목록으로 이동" onclick="location.href='boardList.do?page=${page}'">

