package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.vo.MemberVO;
import co.yedom.service.BoardService;
import co.yedom.service.BoardServiceImpl;

public class MemberAddAjax implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//파라미터 4개 - DB입력 - 반환
		String id =req.getParameter("id");
		String pw =req.getParameter("pw");
		String nm =req.getParameter("um");
		String auth =req.getParameter("auth");
		
		MemberVO mvo = new MemberVO();
		mvo.setUserId(id);
		mvo.setUserPw(pw);
		mvo.setUserName(nm);
		mvo.setResponsibility(auth);

		BoardService svc = new BoardServiceImpl();
		if(svc.addMemberAjax(mvo)) { //{"retcode" : "OK", "retMsg" : "success"}
			resp.getWriter().print("{\"retcode\" : \"OK\", \"retMsg\" : \"success\"}");
			
		}else { //{"retcode" : "NG", "retMsg" : "Fail"}
			resp.getWriter().print("{\"retcode\" : \"NG\", \"retMsg\" : \"Fail\"}");
		}
	}

}
