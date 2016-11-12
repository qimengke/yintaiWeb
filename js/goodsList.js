$(function(){


	//鼠标滑过名包
	$(".goodsClassLink").hover(function(){
		//console.log("进入");
		$(this).css({"background":"#000"});
		$(this).find("ul").show();
	},function(){
		//console.log("出去");
		$(this).css({"background":"#F4F4F4"});
		$(this).find("ul").hide();
	});
	
	//展开按钮
	$(".color").find(".open").on("click",function(){
		$(".color").hide();
		$(".moreCheck").hide();
		$(".hidden").show();
		
		$(".off").show();
		$(".open").hide();
	});
	$(".hidden").find(".open").on("click",function(){
		$(".hidden").hide();
		$(".color").show();

	});
	
	//收起按钮
	$(".off").on("click",function(){
		$(".color").show();
		$(".moreCheck").hide();
		$(".hidden").hide();
		$(this).show();
		$(this).find("a").css({"block":"none"});
		$(".off").hide();
		$(".open").show();
	});
	//多选按钮
	$(".moreOne").on("click",function(){
		$(".color").hide();
		$(".hidden").hide();
		$(".moreCheck").show();
		
		$(".moreOne").hide();
		$(".onlyOne").show();
	})
	
	//单选菜单
	$(".onlyOne").on("click",function(){
		$(".color").hide();
		$(".moreCheck").hide();
		$(".hidden").show();
		
		$(".onlyOne").hide();
		$(".moreOne").show();
	});
	
	//选择排序方式
	$(".goodsSelectList li").find("a").on("click",function(){
		console.log("点击");
		$(".goodsSelectList li").find("a").removeClass("active");
		$(this).addClass("active");
	});
	
	//点击下一页的按钮
	//var count = parseInt($(".goodsCount").find("a").html());
	var count = 1;
	$(".next").on("click",function(){
		count++;
		if(count >= 19){
			count = 19;
		}
		
		$(".goodsCount").html(count);
	});
	
	//点击上一页的按钮
	$(".prev").on("click",function(){
		count--;
		if(count <= 1){
			count = 1;
		}
		
		$(".goodsCount").html(count);
	});
	
	//按颜色展示或者按风格展示
	$(".byColor").on("click",function(){
		$(this).hide();
		//$(".byStyle").show();
		$(".byStyle").css({"display":"block"});
	});
	
	$(".byStyle").on("click",function(){
		$(".byStyle").css({"display":"none"});
		$(".byColor").css({"display":"block"});
	});
	
	//顶部悬浮
	$(window).scroll(function(){
		//var $height = $(".goodsSelect").offset().top;
		//console.log($height);278
		var $h = $(this).scrollTop();
		//console.log($h);
		if($h >= 500) {
			$(".goodsSelect").css({"position":"fixed","top":"0px","marginTop":"0px"});
		}
		if($h < 500) {
			$(".goodsSelect").css({"position":"relative","marginTop":"15px"});
		}
	});
	
		//滑过图片，店铺出现，添加边框
	$(".proDetail").hover(function(){
		//console.log("进入");
		$(this).find(".store").show();
		$(this).find(".store").css({"borderLeft":"1px solid #E50048","borderBottom":"1px solid #E50048","borderRight":"1px solid #E50048"});
		$(this).css({"border-color":"#E50048"});
	},function(){
		//console.log("出去");
		$(this).find(".store").hide();
		$(this).css({"border-color":"#fff"});
	});
	
	
});