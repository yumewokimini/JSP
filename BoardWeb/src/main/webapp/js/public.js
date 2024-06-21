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
const target = document.querySelector('#centerList');
let centers;
let centers2 = [];
let list = [];
//3. 출력



//1. 목록 출력하기
fetch(url)
	.then(result => result.json())//이전에 처리된 결과값을 다시 반환함.
	.then(result => {
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
});




const fields = ['id','centerName','phoneNumber','address'];

function makeRow(center ={}){
		let tr = document.createElement('tr');

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
	console.log(list);
	
		
	const btw = String(document.querySelector('#search').value);
	target.innerHTML='';	
	centers.forEach(function(e){
		if(e.address.includes(btw)){
			
			target.appendChild(makeRow(e));
		}
	})
	
});

