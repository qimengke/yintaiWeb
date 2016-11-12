$(function(){
	var count = 3;
	setInterval(function(){
		count--;
		$(".count").html(count);
		if(count <= 0){
			window.location = "index.html";
		}
	},1000);
});