function check_id() {
	var uid = $("#chuid").val(); 
	let success = "&nbsp&nbsp&nbsp<font style='color:rgb(0, 201, 0)'>사용가능한 아이디입니다.</font>";
	let error = "&nbsp&nbsp&nbsp<font style='color:red'>아이디가 중복됩니다.</font>";
	$.ajax({
		url: "/<controller name>/check_id", 
		type: "POST", 
		data:{ 
			"uid":uid
		},
		dataType:'json',
        	success:function(data){ 
			if(data.responseText == "no"){
				document.getElementById("id").innerHTML = error;
			} else{
				document.getElementById("id").innerHTML = success;
			}
		},
	});
}
