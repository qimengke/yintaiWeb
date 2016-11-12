$(function(){
	$(".passtxt").on("focus",function(){
		$(".new .clientBg").show();
		$(".new .prompt").html("6-20个字符，数字、字母、符号任意组合");
	});
	var flag;
	$(".passtxt").on("blur",function(){
		var $password = $(".passtxt").val();
		flag = /^[0-9_a-zA-Z]{6,20}$/.test($password);
		if($password = ""){
			$(".new .clientBg").show();
			$(".new .prompt").html("密码不能为空");
		}
		if(!flag){
			$(".new .clientBg").show();
			$(".new .prompt").html("6-20个字符，数字、字母、符号任意组合");
		}else{
			$(".new .clientBg").hide();
			$(".new .prompt").html("");
		}
		
			
	});
	
		//确认密码验证
	
	$(".confPwd").on("focus",function(){
		$(".confNew .clientBg").show();
		$(".confNew .prompt").html("请再次输入您的设置密码");
	});
	
	$(".confPwd").on("blur",function(){
		var $confPwd = $(".conftxt").val();
		
		if($password = ""){
			$(".confNew .clientBg").show();
			$(".confNew .prompt").html("密码不能为空");
		}
		if($confPwd != $(".passtxt").val()){
			$(".confPwd .clientBg").show();
			$(".confPwd .prompt").html("两次密码不一样");
		}else{
			$(".confPwd .clientBg").hide();
			$(".confPwd .prompt").html("");
		}
	});	
	
	$(".client-submit").on("click",function(){
		if($(".passtxt").val() == ""){
			$(".new .clientBg").show();
			$(".new .prompt").html("密码不能为空");
			return;
		}else{
			$(".new .clientBg").hide();
			$(".new .prompt").html("");
			if($(".confPwd").val() == ""){
				$(".confNew .clientBg").show();
				$(".confNew .prompt").html("确认密码不能为空");
				return;
			}else{
				$(".confNew .clientBg").hide();
				$(".confNew .prompt").html("");
				updateCookie("myPwd",$(".passtxt").val(),5);
				window.location = "findPasswordC.html";
			}
		}
	});
	
});
