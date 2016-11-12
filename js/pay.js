$(function(){
	//console.log(getCookie("myAllMoney"));
	$(".paySure").on("click",function(){
		//alert();
		if($(".money").val() === getCookie("myAllMoney")){
			window.location = "paySuccess.html";
		}
	});
});