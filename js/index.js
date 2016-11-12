$(function(){
	
	var isLogin = "isLogin";
	//console.log(getCookie("myUserName"));
	if(getCookie(isLogin)){
//		console.log(1)


		$(".userName").html('欢迎您,' + getCookie("myUserName"));
		$(".headerTCRListLoad").html('<a href="javascript:void(0)" id="cancel">退出</a>');
	}else{
		$(".userName").html("Hi,欢迎来到银泰网!");
		$(".headerTCRListLoad").html('<a href="login.html">登录</a><a class="headerTCRListRe" href="register.html">注册</a>');
	}
	//轮播图
	
	
//	$(".bannerMain").opacityFn(1000,500);
	$(".bannerRight").hover(function(){
		$(this).animate({"right":"+=5"});
	},function(){
		$(this).animate({"right":"-=5"});
	});
	
	//$(".hotGoods").load(home/hotgoods.html);
	
	//鼠标滑过爆款商品
	$(".hotGoodsNav li").hover(function(){
		//console.log("进入");
		var $index = $(this).index();
		//console.log($index);
		$(".hotGoodsNav li").removeClass("active");
		$(this).addClass("active");
		$(".hotGoodsListL").eq($index).siblings().hide();
		$(".hotGoodsListL").eq($index).show();	
	},function(){
		
	});
	
	
	
	//楼梯效果开始
	//楼梯滑入滑出
	$(".floor li").hover(function(){
		//console.log("进入");
		$(this).addClass("active");
		$(this).find("span").show();
		$(this).find("span").css({"display":"block"});
	},function(){
		//console.log("出去");
		$(this).removeClass("active");
		$(this).find("span").hide();
	})
	
	//点击top，返回顶部
	$(".floor").find(".last").on("click",function(){
		//console.log(0);
		$("html,body").animate({
			scrollTop:0
		},500);
	});
	
	//点击楼梯层floor，滚到相应的内容stairs区块
	$(".floor li").on("click",function(){
		var $index = $(this).index();//当前点击的楼层
		//console.log($index);
		var $height = $(".stairsList>li").eq($index).offset().top;//楼层对应区块的offsettop；
		//console.log($height);
		$("html,body").animate({
			scrollTop:$height
		},200);
	});
	
	//滚动条事件
	$(window).scroll(function(){
		//console.log(0);
		
		//滚动条当前的高度
		var $h = $(this).scrollTop();
		//console.log($h);
		//第一层的offsetTop
		var $height = $(".stairsList li").eq(0).offset().top;
		//console.log($height);
		//滚动到一定距离显示楼梯导航
		if($h > $height - 100) {
			$(".floor").fadeIn();//淡入
		}else {
			$(".floor").fadeOut();//淡出
		}
		
		//滚动的同时，楼层跟着变化
		
		var $obj = $(".stairsList>li");
		//遍历每一层
		$obj.each(function(){//each把每一个都拿出来了
			//获取当前滚动到哪一个地方
			var $index = $(this).index();
			//console.log($index);
			var $mainHeight = $obj.eq($index).offset().top - $obj.eq($index).height()/2;
			//console.log($mainHeight);
			if($h > $mainHeight){
				$(".floor li").removeClass("active");
				$(".floor li").eq($index).addClass("active");
				$(".floor li").find("span").hide();
				$(".floor li").find("span").eq($index).show();
				$(".floor li").find("span").eq($index).css({"display":"block"});
			}
			
		});
		
	});
	//楼梯效果结束

	//鼠标滑过选项卡切换开始
	$(".generalRightTop li").hover(function(){
		var $index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".generalList").hide();
		$(".generalList").eq($index).show();
	},function(){
		
	});
	
	$(".generalList1 li").hover(function(){
		$(this).find(".shade").show();
	},function(){
		$(this).find(".shade").hide();
	});
	//鼠标滑过选项卡切换结束
	
	//最后的遮罩层
	$(".bottom").find(".bottomImg").hover(function(){
		$(this).find(".bottomShade").show();
	},function(){
		$(this).find(".bottomShade").hide();
	});
	
	
	
	//每层左侧轮播
	function move2($banner,$bannerList,$prevBtn,$nextBtn){
					var bannerListLength = $bannerList.length;
		var _index = 0;
		var _prevIndex = 0;
		
		$prevBtn.on("click", function() {
			//console.log("上一个");
			_prevIndex = _index;
			_index--;
			if (_index < 0) {
				_index = bannerListLength - 1;
				_prevIndex = 0;
			}
		
			autoPlay();
		});
		$nextBtn.on("click", function() {
			//console.log("下一个");
			_prevIndex = _index;
			_index++;
			if (_index > bannerListLength - 1) {
				_index = 0;
				_prevIndex = bannerListLength - 1;
			}
		
			autoPlay();
		});
		
		function autoPlay() {
			if (_prevIndex > _index) {
				$bannerList.eq(_prevIndex).stop().animate({
					"left": "100%",
					"top": 0
				})
				$bannerList.eq(_index).css({
					"left": "-100%",
					"top": 0
				}).stop().animate({
					"left": "0%",
					"top": 0
				})
		
			} else {
				$bannerList.eq(_prevIndex).stop().animate({
					"left": "-100%",
					"top": 0
				})
				$bannerList.eq(_index).css({
					"left": "100%",
					"top": 0
				}).stop().animate({
					"left": "-0%",
					"top": 0
				})
			}
		}
	}
		
		move2($(".bannerBox"), $(".bannerList2"), $(".prevBtn2"), $(".nextBtn2"));
		
		//鼠标滑入图片，动态运动边框
	function creatLineAnimate($ele,time){
		var str1 = "";
		var str2 = "";
		var str3 = "";
		var str4 = "";
		var time = 600;//运动 的时间
		$ele.hover(function(){
			//console.log("进入");
			str1 = $('<div></div>');
			str2 = $('<div></div>');
			str3 = $('<div></div>');
			str4 = $('<div></div>');
		
			str1.css({"position":"absolute","width":"1px","height":"1px","background":"#000","left":"0px","top":"0px"});
			str2.css({"position":"absolute","width":"1px","height":"1px","background":"#000","left":"0px","top":"0px"});
			str3.css({"position":"absolute","width":"1px","height":"1px","background":"#000","left":"100%","top":"100%"});
			str4.css({"position":"absolute","width":"1px","height":"1px","background":"#000","left":"100%","top":"100%"});
			str1.insertAfter($(this).children("a"));
			str2.insertAfter($(this).children("a"));
			str3.insertAfter($(this).children("a"));
			str4.insertAfter($(this).children("a"));
			
			var $width = $(this).width();
			var $height = $(this).height();
			//console.log($width);
			//console.log($height);
			str1.stop().animate({"width":$width},time);
			str2.stop().animate({"height":$height},time);
			str3.stop().animate({"top":"0px","height":$height},time);
			str4.stop().animate({"left":"0px","width":$width},time);
		},function(){
			//console.log("出去");
			str1.stop().animate({"width":"0px","left":"0px"},time,function(){
				str1.remove();
			});
			str2.stop().animate({"height":"0px","top":"0px"},time,function(){
				str2.remove();
			});
			str3.stop().animate({"top":"100%","height":"0px"},time,function(){
				str3.remove();
			});
			str4.stop().animate({"left":"100%","width":"0px"},time,function(){
				str4.remove();
			});
		});
	}
	
	creatLineAnimate($(".generalList2 li"),600);
	creatLineAnimate($(".stairsContRight li"),600);
	
	
});
