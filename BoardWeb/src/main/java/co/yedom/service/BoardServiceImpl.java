package co.yedom.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSource;
import co.yedam.mapper.BoardMapper;
import co.yedam.vo.BoardVO;
import co.yedam.vo.MemberVO;
import co.yedam.vo.SearchVO;

/*
 * 업무 프로세스를 따라 실행 하기 위한 서비스.
 */
public class BoardServiceImpl implements BoardService {

	SqlSession sqlSession 
	= DataSource.getInstance().openSession(true);//자동 커밋	
	BoardMapper mapper = sqlSession.getMapper(BoardMapper.class); 
	
	@Override
	public List<BoardVO> boardList(SearchVO search) {
		// mapper 등록된 기능 활용.
		return mapper.boardListPaging(search);
	}

	@Override
	public int boardTotal(SearchVO search) {
		return mapper.getTotalCnt(search);
	}
	
	@Override
	public BoardVO getBoard(int bno) {
		return mapper.selectBoard(bno);
	}

	@Override
	public boolean addBoard(BoardVO bvo) {
		return mapper.insertBoard(bvo) == 1;
	}

	@Override
	public boolean editBoard(BoardVO bvo) {
		return mapper.updateBoard(bvo) == 1;
	}

	@Override
	public boolean removeBoard(int bvo) {
		return mapper.deleteBoard(bvo) == 1;
	}

	@Override
	public MemberVO checkMember(String id, String pw) {
		// TODO Auto-generated method stub
		return mapper.selectMember(id,pw);
	}
}
