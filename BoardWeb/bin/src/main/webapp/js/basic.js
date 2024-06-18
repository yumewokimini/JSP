// DOM 연습
document.querySelector('ul#fruit>li').innerHTML = '사과'; //첫번째 ul 밑의 li 요소를 가져오겠습니다. (#은 id값)
// li 생성
let li = document.createElement('li'); //createElement 요소 <li></li>태크 생성
li.innerHTML = '<b>오렌지</b>';//
 	
document.querySelector('ul#fruit').appendChild(li);
document.querySelector('ul#fruit>li').remove(); //첫번째만 삭제
document.querySelector('ul#fruit>li').style.backgroundColor = 'yellow';
 	
console.log(document.querySelectorAll('#fruit>li'));//모든 것을 가져옴
let lists = document.querySelectorAll('#fruit>li');
for(let list of lists){
	console.log(list)
	//버튼 생성.
	let btn = document.createElement('button');
	btn.innerText = '삭제';
	btn.setAttribute('class','btn btn-primary');
	
	btn.addEventListener('click',function(){
		btn.parentElement.remove();
	}); // 이벤트 유형, 실행코드
	list.appendChild(btn); 		
} 	
