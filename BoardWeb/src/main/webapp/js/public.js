/**
 * 
*/
let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=hUCwBv%2Fx2r6fLBg9usMg9XaOH2phtdd46OGJjvSu%2FUN9l5qyYD12t7lhocb4ullc8MBmDAMKP1pU0bar8gqrJA%3D%3D';

/*
const xhtp = new XMLHttpRequest();
xhtp.open('get',url);
xhtp.send();
xhtp.onload = function(){
	let data = JSON.parse(xhtp.responseText);
	console.log(data);
}


fetch(url)
	.then(function(result){
		return result.json()//이전에 처리된 결과값을 다시 반환함.
	})
	.then(function(result){
		console.log(result.data);
	})
*/

//센터정보 생성.
document.getElementById('centerDB').addEventListener('click',createCenterInfo);

function createCenterInfo(){
	//1.open API 호출
	//2.컨트롤 호출 DB입력.
	fetch(url)
		.then(result => result.json())
		.then(result => {
			let centers = result.data; //[{},{},{}] => [{"id":"hong"}]
			return fetch('uploadCenter.do',{
				method: 'post', // 전달되는 값이 body 영역에 저장
				headers: {'Content-Type' : "application/json"},//키=값&키=값
				body:JSON.stringify(centers)//객체 -> json문자열
			})
		})
		.then(result => result.json()) //{"tenCnt":3}
		.then(result => {
			
			if(result.txnCnt > 0){
				alert(result.txnCnt + '건 처리 성공');
			}else{
				alert('실패');				
			}
		})
		.catch(err => console.log(err));
}





const target = document.querySelector('#centerList');
let centers;
let centers2 = [];
let list = [];
//3. 출력



//1. 목록 출력하기
fetch(url)
	
	.then(result => result.json())//이전에 처리된 결과값을 다시 반환함. json을 java로 변환
	.then(result => {             // 변환된 java를 사용
		
		centers = result.data;
/*
		for(let i = 0; i<centers.length; i++){
			for(let j = 0; j<list.length; j++){
				if(list[j].sido.)
			}
		}
*/	
		centers.forEach(function(ele, e){
			if((list.indexOf(centers[e].sido)) == -1){
				list.push(centers[e])
			}else{
				
			}
		})		
		
		result.data.forEach((center,idx) => {
			target.appendChild(makeRow(center));
		});
	})
	.catch(function (err) {
		console.log('err: ' ,err);
	});




const fields = ['id','centerName','phoneNumber','address'];

function makeRow(center ={}){
		// console.log(center);
		let tr = document.createElement('tr');
		tr.addEventListener('click',function(){
			location.href = "map.do?centerName="+center.facilityName+"&x="+center.lat+"&y="+center.lng;
		});

		fields.forEach(field =>{
			let td = document.createElement('td');
			td.innerHTML = center[field];

			tr.appendChild(td);

		})
		return tr;
	}

//2. 주소 출력하기
document.getElementById('finBtn').addEventListener('click',function(){
	console.log(centers);
	
//	if(centers[0].sido.indexOf(centers[0].sido) != -1){
//		centers2.push(centers[0]);
//	}
	//console.log(list);
	
		
	const btw = String(document.querySelector('#search').value);
	target.innerHTML='';	
	centers.forEach(function(e){
		if(e.address.includes(btw)){
			
			target.appendChild(makeRow(e));
		}
	})
	
});

