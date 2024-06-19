package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedom.service.BoardService;
import co.yedom.service.BoardServiceImpl;

public class inputAjax implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String id = req.getParameter("userId");
		String pw = req.getParameter("userPw");
		String un = req.getParameter("userName");
		
		BoardService svc = new BoardServiceImpl();
		
		req.setAttribute("userId", id);
		req.setAttribute("userPw", pw);
		req.setAttribute("userName", un);
		req.getRequestDispatcher(un).forward(req, resp);

	}

}
