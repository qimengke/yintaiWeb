$(function(){
	$(".nametxt").on("focus",function(){
		$(".checkPhone .clientBg").show();
		$(".checkPhone .prompt").html("请输入你的手机号码或者Email");
	});
	$(".client-submit").on("click",function(){
		if($(".nametxt").val() == getCookie("myUserName")){
			window.location = "findPasswordS.html";
		}
	});
});
