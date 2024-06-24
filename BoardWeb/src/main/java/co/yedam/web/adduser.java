package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.common.Control;
import co.yedam.vo.MemberVO;
import co.yedom.service.adduserService;
import co.yedom.service.adduserServiceImpl;


public class adduser implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// 파일첨부일 경우에 multipart 요청을 처리.
		// Multipart요청 (1. 요청 정보, 2.저장위치 3.최대크기 4.인코딩 5.리네임정책(이름 변경)
		
		String savePath = req.getServletContext().getRealPath("images");
		int maxSize = 1024 * 1024 * 5;
		String encoding = "utf-8";
		
		MultipartRequest mr = new MultipartRequest(req, savePath, maxSize, encoding, new DefaultFileRenamePolicy());
		
		
		
		
		MemberVO mvo = new MemberVO();
		
		String id = mr.getParameter("id");
		String pass1 = mr.getParameter("pass1");
		String pass2 = mr.getParameter("pass2");
		String name = mr.getParameter("name");
		String img = mr.getFilesystemName("myImage");
		
		adduserService aus = new adduserServiceImpl();		
		
		if(pass1.equals(pass2)){
			System.out.println("비번일치");
						
			mvo.setUserId(id);
			mvo.setUserPw(pass1);
			mvo.setUserName(name);
			mvo.setImage(img);
						
			if(aus.addMemberImage(mvo)) {		
				resp.sendRedirect("memberList.do");		
			}
			
		}else {
			resp.sendRedirect("adduserForm.do");
		}
		
		

		
	}

}
