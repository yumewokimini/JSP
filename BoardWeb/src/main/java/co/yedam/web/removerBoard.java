package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.vo.BoardVO;
import co.yedom.service.BoardService;
import co.yedom.service.BoardServiceImpl;

public class removerBoard implements Control {
//삭제처리하기
	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String bno = req.getParameter("bno");
				
		BoardService svc = new BoardServiceImpl();
		
		if(svc.removeBoard(Integer.parseInt(bno))) {
			resp.sendRedirect("boardList.do");
		}else {
		req.getRequestDispatcher("board/modifyBoardForm.tiles")
		.forward(req, resp);
		}

	}

}
