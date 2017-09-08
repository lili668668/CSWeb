var text_list = [
	"進來的人考試都可以考一百分",
	"空白的背景也是很美的",
	"空白不是因為我不會設計背景喔",
	"襪owo~~，你發現彩蛋了",
	"SITCON 2018 3/18 等你來玩喔owo"
];

$(function() {
	var surprise_click = function() {
		$("#change_text").text(random_text());
	};
	
	var random_text = function() {
		var rand_num = Math.floor(Math.random() * text_list.length);
		return text_list[rand_num];
	};
	
	$("#surprise").click(surprise_click);
});