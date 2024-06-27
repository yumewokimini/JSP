package co.yedam.book.vo;

import java.util.Date;

import lombok.Data;

@Data
public class BookVO {
	private String bookcode;
	private String booktitle;
	private String author;
	private String company;
	private String price;
	private Date creationDate;

}
