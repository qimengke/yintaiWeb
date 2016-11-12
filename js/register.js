$(function(){
	var flag = true;
	var flag1 = true;
	
	//手机号邮箱验证
	$(".phoneNum").on("focus",function(){
		$(".checkPhone .clientBg").show();
		$(".checkPhone .prompt").html("请输入你的手机号码或者Email");
	});
	$(".phoneNum").on("blur",function(){
		var $userName = $(".phoneNum").val();
		flag = /^1(3|5|7|8)\d{9}$/.test($userName);//手机号码验证
		flag1 = /^\w+@\w+(\.\w+)+$/.test($userName);//邮箱验证
		//console.log(flag1);
		
		
		if(flag || flag1){
			$(".checkPhone .clientBg").hide();
			$(".checkPhone .prompt").html("");
			return;
		}else if(!flag){
			$(".checkPhone .clientBg").show();
			$(".checkPhone .prompt").html("请输入正确的手机号码");
		}else if(!flag1){
			$(".checkPhone .clientBg").show();
			$(".checkPhone .prompt").html("请输入正确的邮箱");
		}
		
	});
	
	//登录密码验证
	$(".passtxt").on("focus",function(){
		$(".pwd .clientBg").show();
		$(".pwd .prompt").html("6-20个字符，数字、字母、符号任意组合");
	});
	
	$(".passtxt").on("blur",function(){
		var $password = $(".passtxt").val();
		flag = /^[0-9_a-zA-Z]{6,20}$/.test($password);
		if($password = ""){
			$(".pwd .clientBg").show();
			$(".pwd .prompt").html("密码不能为空");
		}
		if(!flag){
			$(".pwd .clientBg").show();
			$(".pwd .prompt").html("6-20个字符，数字、字母、符号任意组合");
		}else{
			$(".pwd .clientBg").hide();
			$(".pwd .prompt").html("");
		}
		
			
	});
	
	//确认密码验证
	
	$(".conftxt").on("focus",function(){
		$(".confPwd .clientBg").show();
		$(".confPwd .prompt").html("请再次输入您的设置密码");
	});
	
	$(".conftxt").on("blur",function(){
		var $confPwd = $(".conftxt").val();
		
		if($password = ""){
			$(".pwd .clientBg").show();
			$(".pwd .prompt").html("密码不能为空");
		}
		if($confPwd != $(".passtxt").val()){
			$(".confPwd .clientBg").show();
			$(".confPwd .prompt").html("两次密码不一样");
		}else{
			$(".confPwd .clientBg").hide();
			$(".confPwd .prompt").html("");
		}
	});	
	
	//获得验证码
	
	var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	var $btn = $("#J-changeGraphPic");
	var $num = $(".num");
	$btn.on("click", function() {
		//console.log(0);
		var str = "";
		while (str.length < 4) {
			var iNum = parseInt(Math.random() * 100)
			while (iNum > 36) {
				iNum = parseInt(Math.random() * 100)
			}
			str += arr[iNum];
		}
		//console.log(str.toUpperCase());
		$num.html(str.toUpperCase());
	});
	
	//验证码
	$(".graphtxt").on("focus",function(){
		$(".num").show();
		$("#J-changeGraphPic").show();
		$(".hidden .clientBg").show();
		$(".hidden .prompt").html("请输入右侧验证码");
	});
	$(".graphtxt").on("blur",function(){
		var $graphtxt = $(".graphtxt").val();
		var str = $(".num").html();
		//console.log(str);
		//flag = /str/ig.test($graphtxt);
		//console.log(flag);
		if(str != $graphtxt){
			$(".hidden .clientBg").show();
			$(".hidden .prompt").html("验证码不正确");
		}else{
			$(".hidden .clientBg").hide();
			$(".hidden .prompt").html("");
		}
	});
	
	var myUserName = "myUserName";
	var myPwd = "myPwd";
	var isLogin = "isLogin";
	
	$(".client-submit").on("click",function(){
			
		var userName = $(".phoneNum").val();
		var pwd = $(".passtxt").val();
		//console.log(pwd);
		var confPwd = $(".conftxt").val();
		var graph = $(".graphtxt").val();
		var verify = $(".verifytxt").val();
		
		if(userName == ""){
		
			$(".checkPhone .clientBg").show();
			$(".checkPhone .prompt").html("手机号或者Email不能为空");
			return;
		}else{
			if(pwd == ""){
				$(".pwd .clientBg").show();
				$(".pwd .prompt").html("密码不能为空");
				return;
			}else{
				
				if(confPwd == ""){
					
					$(".confPwd .clientBg").show();
					$(".confPwd .prompt").html("确认密码不能为空");
					return;
				}else{
					
					if(graph == ""){
						
						$(".hidden .clientBg").show();
						$(".hidden .prompt").html("图形验证码不能为空");
						return;
					}else{
						
						if(verify == ""){
							
							$(".mobileVer .clientBg").show();
							$(".mobileVer .prompt").html("短信验证码不能为空");
							return;
						}else{
							//alert('');
							register(userName,pwd);
							window.location = "login.html";
						}
					}
				}
			}
		}
		
		function register(userName,pwd){
	
		if(getCookie(myUserName) == userName){
			
			$(".checkPhone .clientBg").show();
			$(".checkPhone .prompt").html("此用户已经注册，请直接登录");
			return;
		}else{
			
			addCookie(myUserName,userName,5);
			addCookie(myPwd,pwd,5);
			addCookie(isLogin,"0",5);
		}
	} 
	});
});