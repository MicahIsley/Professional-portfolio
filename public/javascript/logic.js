$("#aboutTab").click(function(){
	$("#projectSection").hide();
	$("#contactSection").hide();
	$("#bioSection").show();
});

$("#projectTab").click(function(){
	$("#bioSection").hide();
	$("#contactSection").hide();
	$("#projectSection").show();
});

$("#contactTab").click(function(){
	$("#bioSection").hide();
	$("#projectSection").hide();
	$("#contactSection").show();
});

$("#mainLink").click(function(){
	$("#bioSection").hide();
	$("#contactSection").hide();
	$("#projectSection").hide();
});