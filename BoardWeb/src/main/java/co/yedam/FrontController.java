package co.yedam;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.web.adduserForm;
import co.yedam.web.AddStudent;
import co.yedam.web.AjaxForm;
import co.yedam.web.BoardList;
import co.yedam.web.CheckIdAjax;
import co.yedam.web.GetBoard;
import co.yedam.web.LoginControl;
import co.yedam.web.LoginForm;
import co.yedam.web.LogoutControl;
import co.yedam.web.MainControl;
import co.yedam.web.MemberAddAjax;
import co.yedam.web.MemberAjax;
import co.yedam.web.ModifyBoard;
import co.yedam.web.ModifyForm;
import co.yedam.web.ProductControl;
import co.yedam.web.ScriptForm;
import co.yedam.web.StudentForm;
import co.yedam.web.addBoard;
import co.yedam.web.adduser;
import co.yedam.web.boardForm;
import co.yedam.web.delAjax;
import co.yedam.web.inputAjax;
import co.yedam.web.memberList;
import co.yedam.web.removerBoard;
import co.yedam.web.removerForm;


// front ->요청 url(*.do) - 실행컨트롤 매칭.
// main.do -> FrontController -> /web-INF/public/main.jsp
// 객체 생성 -> init -> service -> destroy 



public class FrontController extends HttpServlet{
	private Map<String, Control> map; //key:url,value : control
	
	public FrontController() {
		map = new HashMap<>();
	}
	
	@Override
	public void init(ServletConfig config) throws ServletException {
		map.put("/main.do",new MainControl());
		map.put("/product.do",new ProductControl());
		//map.put("/board.do","게시판페이지입니다.");
		//학생 등록화면 studentForm.do
		map.put("/studentForm.do", new StudentForm());//등록화면
		map.put("/addStudent.do", new AddStudent());//정보db에 저장.
		
		//게시글목록.
		map.put("/boardList.do", new BoardList());
		
		//상세화면
		map.put("/getBoard.do", new GetBoard());
		
		//게시판 저장
		map.put("/boardForm.do", new boardForm());
		map.put("/addBoard.do", new addBoard());
		
		//게시판 삭제
		map.put("/removerBoardForm.do", new removerForm());
		map.put("/removerBoard.do", new removerBoard());
		
		//게시판 수정
		map.put("/modifyForm.do", new ModifyForm());
		//게시판 수정처리
		map.put("/modifyBoard.do", new ModifyBoard());
		//로그인 화면
		map.put("/loginForm.do", new LoginForm());
		//로그인 기능
		map.put("/login.do", new LoginControl());
		//로그 아웃
		map.put("/logout.do", new LogoutControl());
		// 회원목록(관리자 템플릿)
		map.put("/memberList.do", new memberList());
		// 회원등록
		map.put("/adduserForm.do", new adduserForm());
		map.put("/adduser.do", new adduser());
		
		//자바스크립트 연습용 페이지
		map.put("/script.do", new ScriptForm());
		
		//ajax연습
		map.put("/ajax.do", new AjaxForm());
		map.put("/membersAjax.do", new MemberAjax());
		map.put("/addAjax.do", new MemberAddAjax());
		map.put("/checkIdAjax.do", new CheckIdAjax());
		map.put("/delAjax.do", new delAjax());
		map.put("/inputAjax.do", new inputAjax());
	}
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String uri = req.getRequestURI();//http://localhost/boarweb/main.do
//		System.out.println("uri : " + uri);
		String context = req.getContextPath();
//		System.out.println("context : " + context);
		String page = uri.substring(context.length());
//		System.out.println("page: " + page);
		
		Control result = map.get(page);
		result.exec(req, resp);
	}	
}
