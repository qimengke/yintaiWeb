$(function(){
	var count = 5;
	setInterval(function(){
		count--;
		$(".nums").html(count);
		if(count <= 0){
			window.location = "index.html";
		}
	},1000);
});