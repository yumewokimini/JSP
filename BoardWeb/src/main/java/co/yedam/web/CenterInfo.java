package co.yedam.web;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.util.StreamUtils;

import com.fasterxml.jackson.databind.ObjectMapper;

import co.yedam.common.Control;
import co.yedam.vo.CenterVO;
import co.yedom.service.ReplyService;
import co.yedom.service.ReplyServiceImpl;

public class CenterInfo implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//TODO json 문자열 -> 객체 -> DB insert.
		ServletInputStream sis = req.getInputStream(); // stream: 자바에서 데이터를
		String json = StreamUtils.copyToString(sis,StandardCharsets.UTF_8);
		System.out.println(json);
		
		ObjectMapper objectMapper = new ObjectMapper();
		CenterVO[] centers = objectMapper.readValue(json, CenterVO[].class);
		System.out.println(centers);
		ReplyService svc = new ReplyServiceImpl();
		int r = svc.createCenterInfo(centers);
		//{"tenCnt":3}
		
		resp.getWriter().print("{\"txnCnt\":" + r + "}");
		
	}

}
