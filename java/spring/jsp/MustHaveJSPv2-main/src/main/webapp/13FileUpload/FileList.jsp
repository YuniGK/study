<%@ page import="java.net.URLEncoder"%>
<%@ page import="java.util.List"%>
<%@ page import="fileupload.MyFileDAO"%>
<%@ page import="fileupload.MyFileDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head><title>FileUpload</title></head>
<body>
    <h2>DB에 등록된 파일 목록 보기</h2>
    <a href="FileUploadMain.jsp">파일등록1</a>
    <a href="MultiUploadMain.jsp">파일등록2</a>
    <%
    MyFileDAO dao = new MyFileDAO();
    List<MyFileDTO> fileLists = dao.myFileList();
    dao.close();
    %>
    <table border="1">
        <tr>
            <th>No</th><th>제목</th><th>카테고리</th>
            <th>원본 파일명</th><th>저장된 파일명</th><th>작성일</th><th></th>
        </tr>
    <%
    for (MyFileDTO f : fileLists) {
    %>
        <tr>
            <td><%= f.getIdx() %></td>
            <td><%= f.getTitle() %></td>
            <td><%= f.getCate() %></td>
            <td><%= f.getOfile() %></td>
            <td><%= f.getSfile() %></td>
            <td><%= f.getPostdate() %></td>
            <td><a href="Download.jsp?oName=<%= URLEncoder.encode(f.getOfile(),"UTF-8") %>&sName=<%= URLEncoder.encode(f.getSfile(),"UTF-8") %>">[다운로드]</a></td>
        </tr>
    <% } %>
    </table>    
</body>
</html>