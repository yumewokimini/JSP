package co.yedam.vo;

import java.util.Date;

import lombok.Data;

@Data //오버로딩 구현
public class BoardVO {
	private int boardNo;
	private String title;
	private String content;
	private String writer;
	private int clickcnt;
	private Date creationDate;
}
