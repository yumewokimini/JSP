package co.yedam.common;

import java.util.List;
import java.util.function.Consumer;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.yedam.mapper.*;
import co.yedam.vo.*;
import co.yedom.service.*;
import co.yedam.mapper.*;

public class AppTest {
	public static void main (String[] args) {
		SqlSessionFactory sqlSeesionFactory = DataSource.getInstance();
		SqlSession sqlSession = sqlSeesionFactory.openSession();
		
		ReplyMapper mapper = sqlSession.getMapper(ReplyMapper.class);
		// interface에 구현해 메소드가 하나만 있는 인터페이스:함수형 인터페이스.
		//mapper.selectList(201).forEach(new Consumer<ReplyVO>() {
		//	public void accept(ReplyVO t) {//추상 메소드
		//		System.out.println(t);
		//	};
		//});
		
		//mapper.selectList(201).forEach(reply-> System.out.println(reply));
		
		//ReplyVO rvo = mapper.selectReply(24);
		//System.out.println(rvo);
				
		ReplyVO rvo = new ReplyVO();
//		rvo.setReply("댓글작성테스트");
//		rvo.setReply("댓글작성테스트");
//		rvo.setReplyer("admin");
//		rvo.setBoardNo(160);
		
		if(mapper.deleteReply(19) == 1) {
			System.out.println("삭제성공.");
		}
		
//		try {
//		if(mapper.insertReply(rvo) == 1) {
//			System.out.println("입력성공.");
//		}
//		}catch(Exception e) {
//			System.out.println("예외발생.");
//		}
//		
		mapper.selectList(160).forEach(reply-> System.out.println(reply));
		
		
		//interface = 구현객체.
//		StudentMapper mapper = sqlSession.getMapper(StudentMapper.class);
//		BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);
		
//		BoardService svc = new BoardServiceImpl();
//		System.out.println(svc.getBoard(100));
		
//		BoardVO bvo = new BoardVO();
//		입력
//		bvo.setTitle("test");
//		bvo.setContent("test2");
//		bvo.setWriter("user04");
//		
//		sqlSession.insert("co.yedam.mapper.BoardMapper.insertboard",bvo);
//		sqlSession.commit();
		
//		수정
//		bvo.setBoardNo(5);
//		bvo.setTitle("test2");
//		
//		sqlSession.update("co.yedam.mapper.BoardMapper.updateboard",bvo);
//		sqlSession.commit();
		
//		삭제
//		bvo.setBoardNo(5);
//		sqlSession.delete("co.yedam.mapper.BoardMapper.deleteboard",bvo);
//		sqlSession.commit();
		

		
//		List<BoardVO> list = mapper.boardList();
//		for(BoardVO bvo1 : list) {
//			System.out.println(bvo1.toString());
//		}

//		List<BoardVO> list = mapper.boardListPaging(3);
//		for(BoardVO bvo1 : list) {
//			System.out.println(bvo1.toString());
//		}

		
		
//		Student std = new Student();
//		std.setStdNo("S0200");
//		std.setStdName("김영식2");
//		std.setPhone("010-1236-1234");
//		std.setBldType("AB");
//		
//		sqlSession.insert("co.yedam.mapper.StudentMapper.insertStudent",std);
//		sqlSession.commit();
		
//		std.setStdNo("S0200");
//		std.setPhone("010-4567-4567");
		
//		sqlSession.update("co.yedam.mapper.StudentMapper.updateStudent",std);
//		sqlSession.commit();
		
//		sqlsession.update("co.yedam.mapper.studentMapper.up
//		mapper.updateStudent(std);
//		sqlSession.commit();
		
//		std.setStdNo("S0200");
//		mapper.deleteStudent(std);
//		sqlSession.commit();
//		
		
//		List<Student> list 
//		= sqlSession.selectList("co.yedam.mapper.StudentMapper.selectBlog");
//		= mapper.selectBlog();
//		for(Student std1 : list) {
//		    	System.out.println(std1.toString());
//		    }

	}
}
