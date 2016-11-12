$(function(){
	
	
	//手机号码
	$(".nametxt").on("focus",function(){
		$(".userName .clientBg").show();
		$(".userName .prompt").html("请输入您已验证的手机号码或者Email");
	});
	
	//登录密码
	$(".passtxt").on("focus",function(){
		$(".pwd .clientBg").show();
		$(".pwd .prompt").html("请输入您的密码");
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
	
	
	//cookie检验
	var myUserName = "myUserName";
	var myPwd = "myPwd";
	var isLogin = "isLogin";
	$(".client-submit").on("click",function(){
		var userName = $(".nametxt").val();
		var pwd = $(".passtxt").val();
		var graphtxt = $(".graphtxt").val();
		if(userName == ""){
			$(".userName .clientBg").show();
			$(".userName .prompt").html("手机号码或者Email不能为空");
			return;
		}else{
			$(".userName .clientBg").hide();
			$(".userName .prompt").html("");
			if(pwd == ""){
				$(".pwd .clientBg").show();
				$(".pwd .prompt").html("密码不能为空");
				return;
			}else{
				$(".pwd .clientBg").hide();
				$(".pwd .prompt").html("");
				if(graphtxt == ""){
					$(".hidden.clientBg").show();
					$(".hidden .prompt").html("验证码不能为空");
					return;
				}else{
					$(".hidden.clientBg").hide();
					$(".hidden .prompt").html("");
					login(userName,pwd);
				}
			}
		}
		
		function login(userName,pwd){
		var myUserName = "myUserName";
		var myPwd = "myPwd";
		if(getCookie(myUserName) != userName){
			alert();
			$(".userName .clientBg").show();
			$(".userName .prompt").html("此用户不存在，请先注册");
		}else{
			$(".userName .clientBg").hide();
			$(".userName .prompt").html("");
			if(getCookie(myPwd) != pwd){
				$(".pwd .clientBg").show();
				$(".pwd .prompt").html("密码不正确");
				return;
			}else{
				$(".pwd .clientBg").hide();
				$(".pwd .prompt").html("");
				updateCookie(isLogin,"1");
				window.location = "index.html";
			}
		}
	}
		
		
	});
});