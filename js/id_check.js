function check_id() {
	var uid = $("#chuid").val(); // 1
	let success = "&nbsp&nbsp&nbsp<font style='color:rgb(0, 201, 0)'>사용가능한 아이디입니다.</font>"; // 2
	let error = "&nbsp&nbsp&nbsp<font style='color:red'>아이디가 중복됩니다.</font>"; // 2
	$.ajax({
		url: "/<controller name>/check_id", // 3
		type: "POST", // 4
		data:{ // 5
			"uid":uid
		},
		dataType:'json', // 6
        		success:function(data){ // 7
			if(data.responseText == "no"){ //8
				document.getElementById("id").innerHTML = error;
			} else{
				document.getElementById("id").innerHTML = success;
			}
		},
	});
}