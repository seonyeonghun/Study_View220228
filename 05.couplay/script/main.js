/*
// findBt : 찾아보기 버튼
const findBt = document.querySelector("#find_photo");

// fileURL : 선택한 파일 이름, 경로
const fileURL = document.querySelector("#userPhoto");

// targetField : fileURL의 값을 disabled된 input에 대입하는 곳
const targetField = document.querySelector("#fileName");

// 클릭하면 handleUserPhoto 함수 호출
findBt.addEventListener("click", handleUserPhoto);

// 함수 내용 ↓↓↓
function handleUserPhoto(){ //함수 선언
	targetField.value = fileURL.value;
	// form의 필드 갖는 값 value
}

function rejection_email(){
	alert("무단 이메일 수집 거부합니다.개인정보보호법에 의거, 처벌됩니다.")
	// 원래는~ 무단이메일수집 거부 근거, 이유 등등이 적힌 별도의
	// 내용을 화면에 출력해야 함!
}
*/
function open_video(){ // 비디오 열기
	const video = document.querySelector("#video1");
	
	video.classList.remove("d-none"); // .d-none 클래스 제거
}

function close_video(){ // 비디오 닫기
	const video = document.querySelector("#video1");
	
	video.classList.add("d-none"); // .d-none 클래스 추가
}










