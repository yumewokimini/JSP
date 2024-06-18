/**
 *  data.js
 */

 const myMembers = [
	{id: 'user01', name: '홍길동', phone: '010-1111-2222', point: 90}, 
	{id: 'user02', name: '홍길이', phone: '010-1234-5678', point: 95}, 
	{id: 'user03', name: '홍길순', phone: '010-9876-5432', point: 120}
 ]; //new Object();
 
 const json =`[{"id":1,"first_name":"Maje","last_name":"Sturton","email":"msturton0@barnesandnoble.com","gender":"Male","salary":4030},
{"id":2,"first_name":"Mickie","last_name":"Gibben","email":"mgibben1@wired.com","gender":"Male","salary":5533},
{"id":3,"first_name":"Ketty","last_name":"Mullany","email":"kmullany2@de.vu","gender":"Female","salary":5596},
{"id":4,"first_name":"Gwynne","last_name":"Hunting","email":"ghunting3@unblog.fr","gender":"Female","salary":4566},
{"id":5,"first_name":"Ruth","last_name":"Tremayne","email":"rtremayne4@va.gov","gender":"Female","salary":6170},
{"id":6,"first_name":"Fawnia","last_name":"Dunnett","email":"fdunnett5@goo.ne.jp","gender":"Female","salary":7058},
{"id":7,"first_name":"Zebadiah","last_name":"Neachell","email":"zneachell6@hatena.ne.jp","gender":"Male","salary":4475},
{"id":8,"first_name":"Ebeneser","last_name":"Thornhill","email":"ethornhill7@redcross.org","gender":"Male","salary":4963},
{"id":9,"first_name":"Cami","last_name":"Beaven","email":"cbeaven8@surveymonkey.com","gender":"Female","salary":7904},
{"id":10,"first_name":"Pattin","last_name":"MacNaughton","email":"pmacnaughton9@issuu.com","gender":"Male","salary":5768},
{"id":11,"first_name":"Nady","last_name":"Sefton","email":"nseftona@engadget.com","gender":"Female","salary":3452},
{"id":12,"first_name":"Hermon","last_name":"Pimerick","email":"hpimerickb@ebay.co.uk","gender":"Male","salary":6871},
{"id":13,"first_name":"Harcourt","last_name":"Cumbers","email":"hcumbersc@e-recht24.de","gender":"Male","salary":4376},
{"id":14,"first_name":"David","last_name":"Antonietti","email":"dantoniettid@miitbeian.gov.cn","gender":"Male","salary":4704},
{"id":15,"first_name":"Gibb","last_name":"Grimsell","email":"ggrimselle@sohu.com","gender":"Male","salary":7359}]`;

const employees = JSON.parse(json);//자바 스크립 만들기
