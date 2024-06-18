package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.vo.MemberVO;
import co.yedom.service.adduserService;
import co.yedom.service.adduserServiceImpl;


public class adduser implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		MemberVO mvo = new MemberVO();
		
		String id = req.getParameter("id");
		String pass1 = req.getParameter("pass1");
		String pass2 = req.getParameter("pass2");
		String name = req.getParameter("name");

		adduserService aus = new adduserServiceImpl();		
		
		if(pass1.equals(pass2)){
			System.out.println("비번일치");
						
			mvo.setUserId(id);
			mvo.setUserPw(pass1);
			mvo.setUserName(name);
			aus.adduser(mvo);
			resp.sendRedirect("main.do");
			
		}else {
			resp.sendRedirect("adduserForm.do");
		}
		
		

		
	}

}
