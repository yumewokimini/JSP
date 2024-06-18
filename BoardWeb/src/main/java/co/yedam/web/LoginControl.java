package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Control;
import co.yedam.vo.MemberVO;
import co.yedom.service.BoardServiceImpl;

public class LoginControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");

		BoardServiceImpl svc = new BoardServiceImpl();
		MemberVO mvo = svc.checkMember(id, pw);

		if (mvo != null) {
			// 로그인기록
			HttpSession session = req.getSession();
			session.setAttribute("logId", id);

			if (mvo.getResponsibility().equals("User")) {
				resp.sendRedirect("main.do");
			} else if (mvo.getResponsibility().equals("Admin")) {
				resp.sendRedirect("memberList.do");
			}

		} else {
			req.getRequestDispatcher("member/loginForm.tiles").forward(req, resp);
		}

	}

}
