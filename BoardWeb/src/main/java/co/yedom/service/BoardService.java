package co.yedom.service;

import java.util.List;

import co.yedam.vo.BoardVO;
import co.yedam.vo.MemberVO;
import co.yedam.vo.SearchVO;

/*
 * 목록,단건,등록,수정,삭제
 * 기능의 실행은 mapper 실행.
 * 
 */

public interface BoardService {
	List<BoardVO> boardList(SearchVO search);
	int boardTotal(SearchVO search);
	BoardVO getBoard(int bno);//단건조회.
	boolean addBoard(BoardVO bvo);
	boolean editBoard(BoardVO bvo);//수정기능
	boolean removeBoard(int bno);
	
	
	MemberVO checkMember(String id, String pw);
	
	List<MemberVO> memberList();
	boolean addMemberAjax(MemberVO mvo);
	boolean checkMemberId(String id);
	boolean deluser(String id);
	boolean inputuser(MemberVO mvo);
}
