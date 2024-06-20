package co.yedam.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedom.service.ReplyService;
import co.yedom.service.ReplyServiceImpl;

public class removerReply implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// 댓글 삭제
		/*
		String replyNo = req.getParameter("replyNo");
		
		
		ReplyService rs = new ReplyServiceImpl();
		
		if(rs.removerReply(Integer.parseInt(replyNo))) {
			resp.getWriter().print("{\"retCode\":\"OK\"}");//{"retCode":"OK"}
			
		}else{
			resp.getWriter().print("{\"retCode\":\"NG\"}");
		}
		*/
		resp.setContentType("text/json;charset=utf-8");
		String rno = req.getParameter("rno");
		
		ReplyService svc = new ReplyServiceImpl();
		
		Map<String, Object> map = new HashMap<>();
		Gson gson = new GsonBuilder().create();
		
		if(svc.removerReply(Integer.parseInt(rno))) {
			map.put("retCode", "OK");
			map.put("retMsg", "성공으로 삭제되었습니다.");
			
		}else{
			map.put("retCode", "NG");
			map.put("retMsg", "에러가 발생하였습니다.");
		}
		String json = gson.toJson(map);
		resp.getWriter().print(json);
		
	}

}
