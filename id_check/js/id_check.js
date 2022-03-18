function check_id() {
	var uid = $("#chuid").val(); 
    	// id값이 chuid 인 태그의 value값을 uid에 저장합니다.
	let success = "&nbsp&nbsp&nbsp<font style='color:rgb(0, 201, 0)'>사용가능한 아이디입니다.</font>";
    	// 아이디가 중복일 경우와 아닌 경우에 출력할 메시지를 선언 및 저장합니다.
	let error = "&nbsp&nbsp&nbsp<font style='color:red'>아이디가 중복됩니다.</font>";
    	// 아이디가 중복일 경우와 아닌 경우에 출력할 메시지를 선언 및 저장합니다.
	$.ajax({
		url: "/id_check/check_id", // 검사하는 기능을 가지고 있는 함수로 url을 설정합니다.
		type: "POST", // 전송 타입은 POST로 합니다.
		data:{ // 앞에 있는 uid는 컨트롤러로 넘길 uid이름이고 뒤에 있는 uid는 view에서 받은 uid 값입니다.
			"uid":uid
		},
		dataType:'json', // 데이터 타입은 json으로 합니다.
        	success:function(data){ // 데이터를 성공적으로 받으면 아래의 코드를 실행합니다.
			if(data.responseText == "no"){ 
            		//리턴된 값이 "no"일 경우 view에서 id가 "id"인 태그에 변수 error값을 출력합니다, 
            		//반대로 "no"가 아닌 경우 id가 "id"인 태그에 변수 success값을 출력합니다.
				document.getElementById("id").innerHTML = error;
			} else{
				document.getElementById("id").innerHTML = success;
			}
		},
	});
}
