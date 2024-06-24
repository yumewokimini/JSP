package co.yedom.service;

import co.yedam.vo.MemberVO;

public interface adduserService {
	
	boolean adduser(MemberVO mvo);
	
	//파일첨부 회원 등록.
	boolean addMemberImage(MemberVO mvo);
	
	
}
