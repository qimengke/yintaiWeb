$(function(){
		//验证码
	$(".graphtxt").on("focus",function(){
		$(".num").show();
		$(".change").show();
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
	
	$(".phoneNumTxt").val(getCookie("myUserName"));
	
	//获得验证码
	
	var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	var $btn = $(".change");
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
	
	$(".phonetxt").on("focus",function(){
		$(".phoneNum .clientBg").show();
		$(".phoneNum .prompt").html("输入手机验证码");
	});
	
	$(".next").on("click",function(){
		if($(".graphtxt").val() == ""){
			$(".hidden .clientBg").show();
			$(".hidden .prompt").html("验证码不能为空");
			return;
		}else{
			$(".hidden .clientBg").hide();
			$(".hidden .prompt").html("");
			if($(".phonetxt").val() == ""){
				$(".phoneNum .clientBg").show();
				$(".phoneNum .prompt").html("手机验证码不能为空");
				return;
			}else{
				$(".phoneNum .clientBg").hide();
				$(".phoneNum .prompt").html("");
				window.location = "findPasswordT.html";
			}
		}
	});
});