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
	
	$(".proId").html(getCookie("myProductIdC"));
	
	$(".productImg").attr("src",getCookie("myProductImgC"));
	$(".proName").html(getCookie("myProductNameC"));
	$(".productColor").html(getCookie("myProductColorC"));
	$(".productSize").html(getCookie("myProductSizeC"));
	$(".productPrice").html(getCookie("myProductPriceC"));
	$(".productNum").html(getCookie("myProductNumC"));
	$(".productAllPrice").html(getCookie("myAllMoneyC"));
	
});