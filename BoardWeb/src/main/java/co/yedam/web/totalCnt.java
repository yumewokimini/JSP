package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedom.service.ReplyService;
import co.yedom.service.ReplyServiceImpl;

public class totalCnt implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//댓글 건수
		String bno = req.getParameter("bno");
		
		ReplyService svc = new ReplyServiceImpl();
		int totalCnt = svc.getTotalCount(Integer.parseInt(bno));
		
		resp.getWriter().print(totalCnt);
		
	}

}