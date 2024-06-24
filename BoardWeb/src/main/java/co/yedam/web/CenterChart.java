package co.yedam.web;

import java.io.IOException;
import java.util.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Control;
import co.yedom.service.ReplyService;
import co.yedom.service.ReplyServiceImpl;

public class CenterChart implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		resp.setContentType("text/json;charset=utf-8");
		
		ReplyService svc = new ReplyServiceImpl();
		List<Map<String,Object>> result = svc.centerList();
		
		Map<String, Object> centerMap = new HashMap<>();
		
		for(Map<String,Object> map : result) {
			System.out.println(map.get("sido") + "," + map.get("cnt"));
			System.out.println("-------------------");
			centerMap.put((String)map.get("sido"),map.get("cnt"));
		}
		Gson gson = new GsonBuilder().create();
		String json= gson.toJson(result);//cnetermap 
		resp.getWriter().print(json);;
	}

}
