package co.yedam.web;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedam.vo.*;
import co.yedom.service.ReplyService;
import co.yedom.service.ReplyServiceImpl;

public class addReply implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
			req.setCharacterEncoding("utf-8");
			resp.setContentType("text/json;charset=utf-8");
		
			String bno = req.getParameter("bno");
			String reply = req.getParameter("reply");
			String replyer = req.getParameter("replyer");
					
			ReplyVO rvo = new ReplyVO();
			rvo.setBoardNo(Integer.parseInt(bno));
			rvo.setReply(reply);
			rvo.setReplyer(replyer);
			System.out.println(rvo);
			
			
			Map<String,Object> map = new HashMap<String,Object>();
			Gson gson = new GsonBuilder().create();
			
			ReplyService svc = new ReplyServiceImpl();
			

			
			try {
				if(svc.registerReply(rvo)) {
					rvo.setReplyDate(new Date());
					System.out.println(rvo);
					map.put("retCode", "OK");
					map.put("retVal", rvo);
				}
			}catch (Exception e) {
				e.printStackTrace();
				map.put("retCode", "NG");
				map.put("retVal", "처리중 오류 발생");
			}
			//웹브라우즈 출력
			resp.getWriter().print(gson.toJson(map));
		
	}
			
}
