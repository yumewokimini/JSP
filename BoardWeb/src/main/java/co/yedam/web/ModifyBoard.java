package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.vo.BoardVO;
import co.yedom.service.BoardService;
import co.yedom.service.BoardServiceImpl;

public class ModifyBoard implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String bno = req.getParameter("bno");
		String title = req.getParameter("title");
		String content = req.getParameter("content");
		String page = req.getParameter("page");
		String sc = req.getParameter("searchCondition");
		String kw = req.getParameter("keyword");
		
		BoardVO bvo = new BoardVO();
		bvo.setBoardNo(Integer.parseInt(bno));
		bvo.setTitle(title);
		bvo.setContent(content);
		
		
		BoardService svc = new BoardServiceImpl();
		if(svc.editBoard(bvo)) {
			resp.sendRedirect("boardList.do?page="+page +"&searchCondition="+sc+"&keyword=" + kw);
		}else {
			req.getRequestDispatcher("board/modifyBoardForm.jsp")
			 .forward(req, resp);
		}
		
	}

}
