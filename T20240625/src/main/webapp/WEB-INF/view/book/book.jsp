<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<!-- 화면(book) -->
<table border="1" >
		<thead>
		</thead>
		<tbody>
			<tr>
				<th>도서코드</th>
				<td><input type = "text" id = "bookcode" required></td>
				<td rowspan = '5'>
								  <button id="addBtn" class="btn btn-primary">저 장</button>
				                  <button id="removeBtn" class="btn btn-primary">선택 삭제</button>
				</td>
			</tr>
			<tr>
				<th>도서명</th>
				<td><input type = "text" id = "bookname" required></td>
			</tr>
			<tr>
				<th>저자</th>
				<td><input type = "text" id = "bookwriter" required></td>
			</tr>
			<tr>
				<th>출판사</th>
				<td><input type = "text" id = "bookpublisher" required></td>
			</tr>
			<tr>
				<th>금액</th>
				<td><input type = "text" id = "money" required></td>
			</tr>

		</tbody>
</table>
<div id = "bookList">
	<table border="1" >
		<thead>
			<tr>
				<th>도서코드</th>
				<th>도서명</th>
				<th>저자</th>
				<th>출판사</th>
				<th>가격</th>
				<th>삭제</th>
				
			</tr>
		</thead>
		<tbody id = "List"></tbody>
	</table>
</div>

<script src="js/books.js"></script>
</body>
</html>