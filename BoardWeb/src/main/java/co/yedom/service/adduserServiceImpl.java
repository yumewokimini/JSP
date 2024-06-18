package co.yedom.service;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.mapper.userMapper;
import co.yedam.vo.MemberVO;

public class adduserServiceImpl implements adduserService{

	SqlSession sqlSession 
	= DataSource.getInstance().openSession(true);
	userMapper mapper = sqlSession.getMapper(userMapper.class);
	
	@Override
	public boolean adduser(MemberVO mvo) {
		return mapper.adduser(mvo) == 1;
	}

}
