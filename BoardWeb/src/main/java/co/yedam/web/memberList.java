package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedom.service.BoardService;
import co.yedom.service.BoardServiceImpl;
import co.yedom.service.adduserService;
import co.yedom.service.adduserServiceImpl;

public class memberList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		BoardService asv = new BoardServiceImpl();
		
		req.setAttribute("memberList", asv.memberList());
		req.getRequestDispatcher("admin/memberList.tiles")
		 .forward(req, resp);
	}

}
