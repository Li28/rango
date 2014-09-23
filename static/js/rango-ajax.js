$(document).ready(function() {
	$('#likes').click(function(){
	    var catid;
	    catid = $(this).attr("data-catid");
		
		$.get('/rango/like_category/', {category_id: catid}, function(data){
	    	$('#like_count').html(data);
	    	$('#likes').hide();
		});
	});
	
	$('#suggestion').keyup(function(){
        var query;
        query = $(this).val();
        
        $.get('/rango/suggest_category/', {suggestion: query}, function(data){
        	$('#cats').html(data);
        });
	});
	
	$('.add_page').click(function(){
		var btn = $(this);
	    var catid = $(this).attr("data-catid");
	    var title = $(this).attr("data-title");
	    var url = $(this).attr("data-url");
		
		$.get('/rango/auto_add_page/', {category_id: catid, page_title: title, page_url: url}, function(data){
	    	$('#new_page').append('<li>' + data + '</li>');
	    	
	    	$(btn).hide();
		});
	});
});