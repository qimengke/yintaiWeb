//放大镜效果


	

$(function(){
	
	//点击最小图标，变换图片
	$(".smallList li").hover(function(){
		var $index = $(this).index();
		//console.log($index);
		$(".smallImg").attr("src","img/img/m" + ($index+1) + ".jpg");
		$(".bigImg").attr("src","img/img/bg" + ($index+1) + ".jpg");
	},function(){
		
	});
	
	
	//数量加
	var count = 1;
	$(".goodsNumPrev").on("click",function(){
		count++;
		$(".goosNumbers").val(count);
	});
	$(".goodsNumNext").on("click",function(){
		count--;
		if(count <= 1){
			count = 1;
		}
		$(".goosNumbers").val(count);
	});
	
	//放大镜效果
	
	var $goodsPic = $(".goodsPic");//小图的div
	var $smallImg = $(".smallImg");//小图
	var $smallCur = $(".smallCursor");//小放大镜
	var $bigCur = $(".bigCursor");//大的放大镜
	var $bigImg = $(".bigImg");//大的图片
	$goodsPic.on("mousemove",function(e){
		var _left = e.pageX - $goodsPic.offset().left;//鼠标相对于小图div的偏移量
		var _top = e.pageY - $goodsPic.offset().top;//鼠标相对于小图div的偏移量
		//console.log($goodsPic.offset().left);
		//console.log($goodsPic.offset().top);
		//console.log(e.pageX );
		//console.log(e.pageY);
		//console.log(_left);
		//console.log(_top);
		var $smallCurWidth = $smallCur.width();//小放大镜的宽高
		var $smallCurHeight = $smallCur.height();
		//console.log($smallCurWidth);
		var $goodsPicWidth = $goodsPic.width();//小图div的宽高
		var $goodsPicHeight = $goodsPic.height();
		//console.log($goodsPicWidth);
		var $left,$top//放大镜的left，top;
		
		function move(left,top){
			if(left <= $smallCurWidth/2){
				$left = 0;
			}else if(left > $goodsPicWidth - $smallCurWidth/2){
				$left = $goodsPicWidth - $smallCurWidth;
			}else{
				$left = left - $smallCurWidth/2
			}
			
			if(top <= $smallCurHeight/2){
				$top = 0;
			}else if(top > $goodsPicWidth - $smallCurHeight/2){
				$top = $goodsPicHeight - $smallCurHeight;
			}else{
				$top = top - $smallCurHeight/2
			}
			
			return [$left,$top];
		}
		var scale = -2.5;
		var arr = move(_left,_top);
		$smallCur.css({"left":arr[0],"top":arr[1],"display":"block"});
		$bigCur.css({"display":"block"});
		$bigImg.css({"left":scale*arr[0],"top":scale*arr[1]});
		
	});
	
	$goodsPic.on("mouseleave",function(){
		$smallCur.css({"display":"none"});
		$bigCur.css({"display":"none"});
	});
	
	//var colorStr = "",sizeStr = "";
	var imgsrc=["img/img/color1.jpg","img/img/color2.jpg"];
	//选择颜色
	$(".goodsColorList").on("click",function(){
		var $index = $(this).index();

//		$(this).find(".proId").html($index);
//		console.log
//		console.log($(this).find(".proId").html());
//		console.log($(this).index());
		$(this).addClass("active").siblings().removeClass("active");
		$(".goodsColorList").find("b").removeClass("selectSure");
		$(this).find("b").addClass("selectSure");
//		var $index = $(this).index();
		$(".proId").html($index+1);
		$(".productImg").attr("src",imgsrc[$index]);
	});
	
	//选择尺寸
	$(".goodsStyleList").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".goodsStyleList").find("b").removeClass("selectSure");
		$(this).find("b").addClass("selectSure");
		
	});
	
	function addShop(){
		
		var myProductId = "myProductId";
		var myProductName = "myProductName";
		var myProductPrice = "myProductPrice";
		var myProductImg = "myProductImg";
		var myProductColor ="myProductColor"
		var myProductNum = "myProductNum";
		var myProductSize = "myProductSize";
		
		
		var productId = $(".active .proId").html();
		var productName = $(".goodsName").html();
		var productPrice = $(".price").html();
		var productImg = $(".productImg").attr("src");
		var productNum = $(".goosNumbers").val();
		var productColor = $(".active .productColor").html();
		var productSize = $(".active .productSize").html();
		var myAllMoney = $(".goosNumbers").val() * $(".price").html();
		//console.log("productName" + productName);
		//console.log("productPrice" + productPrice);
		//console.log("productImg" +productImg );//取不出来
		//console.log("productNum" + productNum);
		//console.log("productColor" + productColor);
		//console.log("productSize" + productSize);
		
		addCookie(myProductId,productId,5);
		addCookie(myProductName,productName,5);
		addCookie(myProductPrice,productPrice,5);
		addCookie(myProductImg,productImg,5);
		addCookie(myProductColor,productColor,5);
		addCookie(myProductNum,productNum,5);
		addCookie(myProductSize,productSize,5);
		addCookie("myAllMoney",myAllMoney,5);
	}
	//加入购物车
	$(".goodsAddCar").on("click",function(){
		//alert();
		addShop();
	});
	
	//收藏
	$(".goodsCollect").on("click",function(){
		var productIdC = $(".active .proId").html();
		var productNameC = $(".goodsName").html();
		var productPriceC = $(".price").html();
		var productImgC = $(".productImg").attr("src");
		var productNumC = $(".goosNumbers").val();
		var productColorC = $(".active .productColor").html();
		var productSizeC = $(".active .productSize").html();
		var myAllMoneyC = $(".goosNumbers").val() * $(".price").html();
		
		addCookie("myProductIdC",productIdC,5);
		addCookie("myProductNameC",productNameC,5);
		addCookie("myProductPriceC",productPriceC,5);
		addCookie("myProductImgC",productImgC,5);
		addCookie("myProductColorC",productColorC,5);
		addCookie("myProductNumC",productNumC,5);
		addCookie("myProductSizeC",productSizeC,5);
		addCookie("myAllMoneyC",myAllMoneyC,5);
	});
	
	
	//商品评论吸顶效果
	//console.log($(".goodsInfoHead").offset().top);//604
	 
	$(window).scroll(function(){
		var $height = $(".goodsInfoHead").offset().top;
		//console.log($height);
		var $h = $(this).scrollTop();
		if($h >= 877){
			$(".goodsInfoHead").css({"position":"fixed","top":"0px"});
		}
		if($h < 877){
			//console.log(0);
			$(".goodsInfoHead").css({"position":"relative"});
		}
	});
	
	//点击切换
	$(".goodsInfoList li").on("click",function(){
		var $index = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(".productInfo").eq($index).show().siblings().hide();
	});
	
});

