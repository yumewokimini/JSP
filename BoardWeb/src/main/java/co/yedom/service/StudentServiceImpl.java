package co.yedom.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.mapper.StudentMapper;
import co.yedam.vo.Student;

public class StudentServiceImpl implements StudentService {

	SqlSession sqlSession 
		= DataSource.getInstance().openSession(true);//자동 커밋	
	StudentMapper mapper = sqlSession.getMapper(StudentMapper.class); 
	
	@Override
	public List<Student> studentList() {
		return mapper.selectBlog();
	}

	@Override
	public boolean addStudent(Student std) {
		return mapper.insertStudent(std) == 1;
	}
	

	@Override
	public boolean modifyStudent(Student std) {
		return mapper.updateStudent(std) == 1;
	}

}
