package co.yedam.mapper;

import java.util.*;

import org.apache.ibatis.annotations.Param;

import co.yedam.vo.CenterVO;
import co.yedam.vo.ReplyVO;

public interface ReplyMapper {
	
	List<ReplyVO> selectList(int boardNo);
	List<ReplyVO> selectListPaging(@Param("boardNo") int boardNo, @Param("page") int page);
	ReplyVO selectReply(int replyNo);
	int insertReply(ReplyVO rvo);
	int deleteReply(int replyNo);

	//댓글건수.
	int selectReplyCnt(int bno);
	
	//센터정보 생성.
	
	int insertCenter(CenterVO[] array);
	
	//시도별 센터의 갯수
	List<Map<String, Object>> centerBysido();
	
}
