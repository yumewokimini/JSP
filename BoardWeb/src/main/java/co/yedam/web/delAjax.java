package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.vo.MemberVO;
import co.yedom.service.BoardService;
import co.yedom.service.BoardServiceImpl;

public class delAjax implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String id = req.getParameter("id");
		
		BoardService svc = new BoardServiceImpl();
		if(svc.deluser(id)) {
			resp.getWriter().print("{\"retCode\":\"OK\"}");//{"retCode":"OK"}
			
		}else{
			resp.getWriter().print("{\"retCode\":\"NG\"}");
		}
		
		
	}

}
