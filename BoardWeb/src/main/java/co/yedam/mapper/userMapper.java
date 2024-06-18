package co.yedam.mapper;

import co.yedam.vo.MemberVO;

import org.apache.ibatis.annotations.Param;

public interface userMapper {
	
	public int adduser(MemberVO user);
}
