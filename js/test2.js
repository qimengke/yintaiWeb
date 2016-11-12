$(function(){
	$("#banner").opacityFn1(3000,500);
	var $bannerbg = $("#bannerbg");
	/*$bannerbg.css({"background-image":"url(img/banner01.jpg)","background-repeat":"no-repeat","background-size":"cover","background-position":"center center"});*/
	$(".stairsContBanner").move($(".bannerList1"),$(".bannerList1 li"),$(".bannerImg"),$(".prevBtn1"),$(".nextBtn1"),$(".bannerNav1"));
	//$(".stairsContLeft").move2($(".bannerBox"),$(".bannerList2"),$(".prevBtn2"),$(".nextBtn2"));
	$("#stairsContBanner1").move($(".bannerList1"),$(".bannerList1 li"),$(".bannerImg"),$(".prevBtn1"),$(".nextBtn1"),$(".bannerNav1"));
});
