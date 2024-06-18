package co.yedam.common;

import lombok.Data;

@Data
public class PageDTO {
	private int startPage, endPage; // 포함되어있는 페이지의 기준으로 보이기 위함
	private boolean prev, next;     // 현재 페이지 기준으로 앞으로 10개 또는 뒤에 10개를 확인함.
	private int page;
	
	//생성자.
	public PageDTO(int page, int totalCnt) {
		
		this.page = page; // 1page ~ 4page(기준) ~ 10page
		this.endPage = (int)(Math.ceil(page/10.0) * 10);
		this.startPage = this.endPage - 9;
		
		int realEnd = (int) Math.ceil(totalCnt/5.0);
		this.endPage = this.endPage > realEnd ? realEnd : this.endPage; // this.endpage 계산상의 페이지 실제 페이지가 realEnd 일경우 realEnd를 값을 넣어주고 아니면 this.endpage값을 넣어준다.
		
		this.prev = this.startPage > 1;
		this.next = this.endPage == realEnd ? false : true;
		
	}	
}
