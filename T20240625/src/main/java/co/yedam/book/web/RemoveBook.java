package co.yedam.book.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.book.service.BookService;
import co.yedam.book.service.BookServiceImpl;
import co.yedam.common.Control;

public class RemoveBook implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String id = req.getParameter("id");
		
		BookService bsv = new BookServiceImpl();
		if(bsv.removeBook(id)) {
			resp.getWriter().print("{\"retCode\":\"OK\"}");//{"retCode":"OK"}
			
		}else{
			resp.getWriter().print("{\"retCode\":\"NG\"}");
		}
	}

}
