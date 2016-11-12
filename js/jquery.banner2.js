;$(function() {
	$.fn.extend({
		//透明度切换
		opacityFn: function(duration,playTime) {
			var timer = "";
			var index = 0;
			var $bannerbg = $(this).find(".bannerbg")
			var imgLength = $(this).find(".bannerImg").length;
			var $bannerList = $(this).find(".bannerList li");
			var $bannerNav = $(this).find(".bannerNav");
			var $prevBtn = $(this).find(".prevBtn");
			var $nextBtn = $(this).find(".nextBtn");
			var $bannerImg = $(this).find(".bannerList li .bannerImg");
			//将显示的顺序一一对应
			for (var i = 0; i < imgLength; i++) {
				$bannerList.eq(i).css({
					"zIndex": imgLength - i
				});
				$bannerNav.append("<li></li>");
			}
			$bannerNav.find("li").eq(0).addClass("active");
			function autoPlay(_index) {
				
				$bannerList.eq(_index).stop().fadeIn(playTime).siblings().fadeOut(playTime);
				$bannerNav.find("li").removeClass("active");
				$bannerNav.find("li").eq(_index).addClass("active");
				//$bannerbg.css({"background-image":""});
			}
			
			$prevBtn.on("click", function() {
				index--;
				if (index < 0) {
					index = imgLength - 1;
				}
				autoPlay(index);
			});
			$nextBtn.on("click", function() {
				index++;
				if (index > imgLength - 1) {
					index = 0;
				}
				autoPlay(index);
			});
			timer = setInterval(function() {
				$nextBtn.click();
			}, duration);

			$bannerNav.find("li").on("click", function() {
				index = $(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				autoPlay(index);
			});


			clearTimer($bannerImg);
			clearTimer($bannerNav);
			clearTimer($prevBtn);
			clearTimer($nextBtn);

			function clearTimer($ele) {
				$ele.hover(function() {
					$prevBtn.show();
					$nextBtn.show();
					clearInterval(timer);
				}, function() {
					timer = setInterval(function() {
						$nextBtn.click();
					}, duration);
					$prevBtn.hide();
					$nextBtn.hide();
				})
			}
		},
		
		//有背景图切换的轮播
		opacityFn1: function(duration,playTime) {
			var timer = "";
			var index = 0;
			var $bannerbg = $("#bannerbg");
			var imgLength = $(this).find(".bannerImg").length;
			var $bannerList = $(this).find(".bannerList li");
			var $bannerNav = $(this).find(".bannerNav");
			var $prevBtn = $(this).find(".prevBtn");
			var $nextBtn = $(this).find(".nextBtn");
			var $bannerImg = $(this).find(".bannerList li .bannerImg");
			//将显示的顺序一一对应
			for (var i = 0; i < imgLength; i++) {
				$bannerList.eq(i).css({
					"zIndex": imgLength - i
				});
				$bannerbg.css({"background-image":"url(img/banner0"+(i+1)+".jpg)","background-repeat":"no-repeat","background-size":"cover","background-position":"center center"});
				$bannerNav.append("<li></li>");
			}
			$bannerNav.find("li").eq(0).addClass("active");
			function autoPlay(_index) {
				
				$bannerList.eq(_index).stop().fadeIn(playTime).siblings().fadeOut(playTime);
				$bannerNav.find("li").removeClass("active");
				$bannerNav.find("li").eq(_index).addClass("active");
				//改变背景色
				$bannerbg.css({"background-image":"url(img/banner0"+(_index+1)+".jpg)","background-repeat":"no-repeat","background-size":"cover","background-position":"center center"});
				//$bannerbg.css({"background-image":""});
			}
			
			$prevBtn.on("click", function() {
				index--;
				if (index < 0) {
					index = imgLength - 1;
				}
				autoPlay(index);
			});
			$nextBtn.on("click", function() {
				index++;
				if (index > imgLength - 1) {
					index = 0;
				}
				autoPlay(index);
			});
			timer = setInterval(function() {
				$nextBtn.click();
			}, duration);

			$bannerNav.find("li").on("click", function() {
				index = $(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				autoPlay(index);
			});


			clearTimer($bannerImg);
			clearTimer($bannerNav);
			clearTimer($prevBtn);
			clearTimer($nextBtn);

			function clearTimer($ele) {
				$ele.hover(function() {
					$prevBtn.show();
					$nextBtn.show();
					clearInterval(timer);
				}, function() {
					timer = setInterval(function() {
						$nextBtn.click();
					}, duration);
					$prevBtn.hide();
					$nextBtn.hide();
				})
			}
		},
		
		//
//		slide: function(duration,playTime) {
//			var timer = "";
//			var index = 0;
//			var imgLength = $(this).find(".bannerImg").length;
//			var $bannerList = $(this).find(".bannerList li");
//			var $bannerNav = $(this).find(".bubble");
//			var $prevBtn = $(this).find("#prevBtn");
//			var $nextBtn = $(this).find("#nextBtn");
//			var $bannerImg = $(this).find(".bannerList li .bannerImg");
//			//将显示的顺序一一对应
//			for (var i = 0; i < imgLength; i++) {
//				$bannerList.eq(i).css({
//					"zIndex": imgLength - i
//				});
//				$bannerNav.append("<li></li>");
//			}
//			$bannerNav.find("li").eq(0).addClass("active");
//			function autoPlay(_index) {
//				$bannerList.eq(_index).stop().slideDown(playTime).siblings().slideUp(playTime);
//				$bannerNav.find("li").removeClass("active");
//				$bannerNav.find("li").eq(_index).addClass("active");
//			}
//
//			$prevBtn.on("click", function() {
//				index--;
//				if (index < 0) {
//					index = imgLength - 1;
//				}
//				autoPlay(index);
//			});
//			$nextBtn.on("click", function() {
//				index++;
//				if (index > imgLength - 1) {
//					index = 0;
//				}
//				autoPlay(index);
//			});
//			timer = setInterval(function() {
//				$nextBtn.click();
//			}, duration);
//
//			$bannerNav.find("li").on("click", function() {
//				index = $(this).index();
//				$(this).addClass("active").siblings().removeClass("active");
//				autoPlay(index);
//			});
//
//
//			clearTimer($bannerImg);
//			clearTimer($bannerNav);
//			clearTimer($prevBtn);
//			clearTimer($nextBtn);
//
//			function clearTimer($ele) {
//				$ele.hover(function() {
//					clearInterval(timer);
//				}, function() {
//					timer = setInterval(function() {
//						$nextBtn.click();
//					}, duration);
//				})
//			}
//		}
	 move:function($banner,$bannerList,$bannerImg,$prevBtn,$nextBtn,$buddle){
					var bannerListLength = $bannerList.length;
					var _index = 0;
					var _prevIndex = 0;
					var _timer = "";
	
					
					
					
					for(var i=0;i<bannerListLength;i++){
						$bannerList.eq(i).css("zIndex",bannerListLength-i);
						//$buddle.append("<li></li>");
						
					}
					$buddle.find("li").eq(0).addClass("active");
					
					$buddle.find("li").on("click",function(){
						$(this).addClass("active").siblings().removeClass("active");
						_index = $(this).index();
						autoPlay();
					});
					$buddle.hover(function(){
						clearInterval(_timer);
					},function(){
						_timer = setInterval(function(){
						$nextBtn.click()
					},5000)
					});
					$bannerList.hover(function(){
						
						clearInterval(_timer);
					},function(){
//						_timer = setInterval(function(){
//						$nextBtn.click()
//					},5000)
					});
					

					
					$prevBtn.on("click",function(){
						//console.log("上一个");
							_prevIndex =_index;
						_index--;
						if(_index < 0){
							_index = bannerListLength - 1;
							_prevIndex = 0;
						}
					 
						autoPlay();
					});
					$nextBtn.on("click",function(){
						//console.log("下一个");
						_prevIndex =_index; 
						_index++;
						if(_index > bannerListLength - 1){
							_index = 0;
							_prevIndex = bannerListLength - 1;
						}
						
						autoPlay();
					});
					
					function autoPlay(){
						if(_prevIndex > _index){
							$bannerList.eq(_prevIndex).stop().animate({"left":"100%","top":0})
							$bannerList.eq(_index).css({"left":"-100%","top":0}).stop().animate({"left":"0%","top":0})
							
						}else{
							$bannerList.eq(_prevIndex).stop().animate({"left":"-100%","top":0})
							$bannerList.eq(_index).css({"left":"100%","top":0}).stop().animate({"left":"-0%","top":0})
						}
						
						$buddle.find("li").removeClass("active");
						$buddle.find("li").eq(_index).addClass("active");
						
						clearInterval(_timer);
						_timer = setInterval(function(){
							$nextBtn.click()
						},5000);
					}
					
					clearTimer($bannerImg);
					clearTimer($buddle);
					clearTimer($prevBtn);
					clearTimer($nextBtn);
		
					function clearTimer($ele) {
						$ele.hover(function() {
							$prevBtn.show();
							$nextBtn.show();
							//clearInterval(timer);
						}, function() {
							/*timer = setInterval(function() {
								$nextBtn.click();
							}, duration);*/
							//$prevBtn.hide();
							//$nextBtn.hide();
						})
					}
					
					$banner.on("mouseleave",function(){
						//console.log("出去");
						$prevBtn.hide();
						$nextBtn.hide();
					});
					
			}
		

		
		
	
	});
});