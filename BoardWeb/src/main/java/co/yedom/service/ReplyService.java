package co.yedom.service;

import java.util.*;

import co.yedam.vo.CenterVO;
import co.yedam.vo.ReplyVO;

public interface ReplyService {
	//목록,단건,입력,삭제
	List<ReplyVO> replyList(int boardNo,int page);
	ReplyVO getReply(int replyNo);
	boolean registerReply(ReplyVO rvo);
	boolean removerReply(int replyNo);

	//댓글건수.
	int getTotalCount(int bno);
	
	int createCenterInfo(CenterVO[] array);
	List<Map<String,Object>> centerList();
	
}
