<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!--  publicData.jsp -->
<h3>공공데이터 연습</h3>
주소 검색 : <input type="text" id="search" placeholder="ex)동구" > <button class="btn btn-primary" id="finBtn">검색</button>
<select>
	<option value="">
</select>
<table class="table">
    <thead>
        <tr>
            <th>센터ID</th>
            <th>선터명</th>
            <th>연락처</th>
            <th>주소</th>
        </tr>
    </thead>
    <tbody id ="centerList"></tbody>
</table>

<script src="js/public.js"></script>