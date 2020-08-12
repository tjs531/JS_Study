var now = new Date();   //현재 날짜와 시간
var firstDate = new Date("2019-12-25"); //설정 날짜. 2019년 12월 25일 설정

var start = firstDate.getTime();    //기념일의 밀리세컨드를 구함, 0.001초
var end = now.getTime() //오늘의 밀리세컨드
var pass = end - start; //오늘 - 기념일 -> 경과시간의 밀리세컨드
var passDay = Math.floor(pass/1000/60/60/24);   //경과 일수

document.querySelector('#passDay').innerHTML = passDay;


calcDay(100);
calcDay(200);
calcDay(365);
calcDay(500);
calcDay(730);
calcDay(1000);

//경과 시간에 대한 확인
/*        console.log(pass + " ms"); //경과시간을 밀리세컨드로 표현
console.log(pass/1000 + " s"); //초
console.log(pass/1000/60 + " 분");  //분
console.log(pass/1000/60/60 + " 시간"); //시간
console.log(pass/1000/60/60/24 + " 일");    //일
console.log(Math.floor(pass/1000/60/60/24) + " 일");    //소수점 버리기
*/

function calcDay(days) {
//전달받은 일을 밀리세컨드로 바꿔야함.
//days(일)을 anni(밀리세컨드)로 변경
var days2 = days*1000*60*60*24;
var passDay2 = start + days2;   //기념일에서 경과일을 더한 밀리세컨드

//밀리세컨드를 Date객체로 다시 만들어줘야 함.->년월일을 구하기 위해서
var someDate = new Date(passDay2);
//console.log(someDate);
//console.log(someDate.toLocalString());

//년월일을 구함
var year = someDate.getFullYear();
var month = someDate.getMonth()+1;
var day = someDate.getDate();

var month2 = "";
if(month < 10) {
    month2 = '0' + month.toString();
}else{
    month2 = month;
}

var day2 = "";
if(day<10){
    day2 = '0'.concat(day);
}else{
    day2 = day;
}
//console.log(year + ' ' + month2+ ' ' + day2);
document.querySelector("#date"+days).innerHTML = year + '년 ' + month2+ '월 ' + day2 + '일';
}