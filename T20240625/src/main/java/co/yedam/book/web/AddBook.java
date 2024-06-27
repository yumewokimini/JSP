package co.yedam.book.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.book.service.BookService;
import co.yedam.book.service.BookServiceImpl;
import co.yedam.book.vo.BookVO;
import co.yedam.common.Control;

public class AddBook implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		
		
		String co = req.getParameter("co");
		String name = req.getParameter("name");
		String wr = req.getParameter("wr");
		String bc = req.getParameter("bc");
		String mo = req.getParameter("mo");
		

		
		BookService bsv = new BookServiceImpl();
		BookVO bvo = new BookVO();
		bvo.setBookcode(co);
		bvo.setBooktitle(name);
		bvo.setAuthor(wr);
		bvo.setCompany(bc);
		bvo.setPrice(mo);
		
		
	
		if(bsv.addBook(bvo)) {
			
			resp.getWriter().print("{\"retcode\" : \"OK\", \"retMsg\" : \"success\"}");
		}else {
			resp.getWriter().print("{\"retcode\" : \"NG\", \"retMsg\" : \"Fail\"}");
		}
		

	}

}
