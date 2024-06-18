package co.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.vo.Student;
import co.yedom.service.StudentService;
import co.yedom.service.StudentServiceImpl;

public class AddStudent implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

//		SqlSession sqlSession = DataSource.getInstance().openSession();
//		StudentMapper mapper = sqlSession.getMapper(StudentMapper.class); // 매칭
//		req.setCharacterEncoding("UTF-8");

		String no = req.getParameter("sno");
		String name = req.getParameter("sname");
		String phone = req.getParameter("phone");
		String btype = req.getParameter("btype");

		StudentService svc = new StudentServiceImpl();
		
		Student student = new Student();
		student.setStdNo(no);
		student.setStdName(name);
		student.setPhone(phone);
		student.setBldType(btype);

		if (svc.addStudent(student)) {
			System.err.println("정상등록");
			resp.sendRedirect("main.do");
		} else {
			System.out.println("등록실패");
			req.setAttribute("message", "처리중 오류가 발생");
			req.getRequestDispatcher("/studentForm.tiles").forward(req, resp);
		}
	}

}
