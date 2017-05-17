$(function(){
	$(".include").each(function() {
	    var file = $(this).attr("file");
	    if(!!file) {
	        var thisObj = $(this);
	        $.get(file, function(html) {
	            thisObj.after(html).remove();
	        });
	    }
	});
})