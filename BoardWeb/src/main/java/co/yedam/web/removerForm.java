package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.vo.BoardVO;
import co.yedom.service.BoardService;
import co.yedom.service.BoardServiceImpl;

public class removerForm  implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		BoardService svc = new BoardServiceImpl();
		
		String boardNo = req.getParameter("bno");
	
		BoardVO bvo = svc.getBoard(Integer.parseInt(boardNo));
		
		req.setAttribute("board", bvo);
		
		req.getRequestDispatcher("member/removerBoardForm.tiles").forward(req, resp);
		
		
	}

}
