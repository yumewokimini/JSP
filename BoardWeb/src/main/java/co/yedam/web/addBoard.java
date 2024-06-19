package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.vo.BoardVO;
import co.yedom.service.BoardService;
import co.yedom.service.BoardServiceImpl;

public class addBoard implements Control{
	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		
		String title = req.getParameter("title");
		String content = req.getParameter("content");
		String writer = req.getParameter("writer");
		
		BoardService svc = new BoardServiceImpl();
		
		BoardVO BVO = new BoardVO();
		BVO.setTitle(title);
		BVO.setContent(content);
		BVO.setWriter(writer);
		
		if (svc.addBoard(BVO)) {
			System.out.println("정상등록");
			resp.sendRedirect("boardList.do");
		} else {
			System.out.println("등록실패");
			req.setAttribute("message", "처리중 오류가 발생");
			req.getRequestDispatcher("board/boardForm.jsp").forward(req, resp);
		}
		
	}

	
}
