$(function(){
	//切换选项卡
	$(".shopPayList li").on("click",function(){
		//console.log("dianji");
		$(this).addClass("active").siblings().removeClass("active");
		var $index = $(this).index();
		$(".way").eq($index).addClass("active").siblings().removeClass("active");
	});
	
	//点击修改支付方式
	$(".revise").on("click",function(){
		$(".commodityBox").hide();
		$(".shopCheckBox").slideDown();
	});
	
	$(".cancel").on("click",function(){
		$(".shopCheckBox").slideUp();
		$(".commodityBox").show();
		
	});
	
	//商品清单的信息
	console.log(getCookie("myProductId"));
	$(".proId").html(getCookie("myProductId"));
	
	$(".productImg").attr("src",getCookie("myProductImg"));
	$(".proName").html(getCookie(getCookie("myProductName")));
	$(".productColor").html(getCookie("myProductColor"));
	$(".productSize").html(getCookie("myProductSize"));
	$(".productPrice").html(getCookie("myProductPrice"));
	$(".productNum").html(getCookie("myProductNum"));
	$(".productAllPrice").html(getCookie("myAllMoney"));
	$(".allMoney").html(getCookie("myAllMoney"));
	
})