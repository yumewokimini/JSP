package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.vo.MemberVO;
import co.yedom.service.BoardService;
import co.yedom.service.BoardServiceImpl;

public class inputAjax implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		String name = req.getParameter("name");
		
		BoardService svc = new BoardServiceImpl();
		MemberVO mvo = new MemberVO();
		mvo.setUserId(id);
		mvo.setUserPw(pw);
		mvo.setUserName(name);
		
		if(svc.inputuser(mvo)) {
			resp.getWriter().print("{\"retCode\":\"OK\"}");//{"retCode":"OK"}
			
		}else{
			resp.getWriter().print("{\"retCode\":\"NG\"}");
		}

	}

}
