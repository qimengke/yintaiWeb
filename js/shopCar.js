$(function(){
	var myProductName = "myProductName";
	var myProductPrice = "myProductPrice";
	var myProductImg = "myProductImg";
	var myProductColor = "myProductColor";
	var myProductNum = "myProductNum";
	var myProductSize = "myProductSize";
	var myOrderState = "myOrderState";
	var allPrice;
	if(checkCookie(myProductName)&& checkCookie(myProductPrice)&& checkCookie(myProductColor)&& checkCookie(myProductNum)&& checkCookie(myProductSize)){
		
		$(".proName").html(getCookie(myProductName));
		$(".productColor").html(getCookie(myProductColor));
		$(".productSize").html(getCookie(myProductSize));
		$(".productPrice").html(getCookie(myProductPrice));
		$(".productNums").val(getCookie(myProductNum));
		allPrice = getCookie(myProductNum)*getCookie(myProductPrice);
		$(".productAllPrice").html(allPrice);
		$(".productImg").attr("src",getCookie(myProductImg));
		//console.log(getCookie(myProductImg));
		
	}
	$(".money").html($(".productAllPrice").html());
	var count = $(".productNums").val();
	var nowPrice;
	$(".add").on("click",function(){
		//alert();
		count++;
		nowPrice = count * $(".productPrice").html();
		$(".productAllPrice").html(nowPrice);
		$(".productNums").val(count);
		$(".money").html($(".productAllPrice").html());
	});
	
	$(".minus").on("click",function(){
		count--;
		if(count <= 1 ){
			count = 1;
		}
		nowPrice = count * $(".productPrice").html();
		$(".productAllPrice").html(nowPrice);
		$(".productNums").val(count);
		$(".money").html($(".productAllPrice").html());
	});
	
	$(".money").html($(".productAllPrice").html());
	
	//点击结算，更新数量，并把总价存起来
	$(".goBuy").on("click",function(){
		var myAllMoney = "myAllMoney";
		var allMoney = $(".money").html();
		addCookie(myAllMoney,allMoney,5);
		var proAllNum = $(".productNums").val();
		//console.log(proAllNum);
		updateCookie(myProductNum,proAllNum,5);
	});
});