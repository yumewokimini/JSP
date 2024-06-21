package co.yedam.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.vo.ReplyVO;
import co.yedom.service.*;

public class ReplyList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		String bno = req.getParameter("bno");
		String page = req.getParameter("page");
		
		System.out.println("bno 값 = " +bno);
		System.out.println("page 값 = " +page);
		
		
		page = page == null ? "1" : page;
		
		//댓글 목록.
		ReplyService svc = new ReplyServiceImpl();
		List<ReplyVO> list = svc.replyList(Integer.parseInt(bno),Integer.parseInt(page));
		

//		Gson gson = new GsonBuilder().create(); // gson 객체 생성.
		Gson gson = new GsonBuilder().setPrettyPrinting().create(); // gson 객체 생성.
		String json = gson.toJson(list); //객체 -> 문자열.
		
		resp.getWriter().print(json); // 출력.
	}

}
