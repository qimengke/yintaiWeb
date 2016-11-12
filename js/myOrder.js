$(function(){
//	$(".open").on("click",function(){
//		var $index = $(this).index();
//		console.log($index);
//		$(this).parent().addClass("active");
//		
//		$(".orderListBox").eq($index).show();
//	});
	
	$(".open").on("click",function(){
		$(this).parent().siblings().show();
		$(this).parent().addClass("active");
		$(this).hide();
		//var $index = $(this).index();
		//console.log($index);
		$(this).siblings().show();
	});
	
	$(".off").on("click",function(){
		$(this).parent().siblings().hide();
		$(this).parent().removeClass("active");
		$(this).hide();
		//var $index = $(this).index();
		//console.log($index);
		$(this).siblings().show();
	});
	
	$(".proId").html(getCookie("myProductId"));
	
	$(".productImg").attr("src",getCookie("myProductImg"));
	$(".proName").html(getCookie("myProductName"));
	$(".productColor").html(getCookie("myProductColor"));
	$(".productSize").html(getCookie("myProductSize"));
	$(".productPrice").html(getCookie("myProductPrice"));
	$(".productNum").html(getCookie("myProductNum"));
	$(".productAllPrice").html(getCookie("myAllMoney"));
});