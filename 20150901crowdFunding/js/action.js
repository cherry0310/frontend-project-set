//table toggle
function showHide(){
	 if($("#icon").prop("className")=="open"){
		$(".hide").attr("class","show");
		$("#icon").attr("class","close");
		$("#icon").attr("src","styles/images/close_icon.png");
	}else{
		$(".show").attr("class","hide");
		$("#icon").attr("class","open");
		$("#icon").attr("src","styles/images/open_icon.png");
	} 	
}
//popup
function popup(){
	var loc=$('#help_main');
	var div_width=loc.width();
	var div_height=loc.height();
	var div_left=loc.offset().left;
	var div_top=loc.offset().top;
	//popup_back setPosition
	var pop_back=$('#popup_back');
	pop_back.css("left",div_left);
	pop_back.css("top",div_top);
	pop_back.css("width",div_width);
	pop_back.css("height",div_height);
	pop_back.css("display","block");	
	//popup_content setPosition
	var pop_content=$('#popup_content');
	pop_content.css("left",div_left+div_width*0.09);
	pop_content.css("top",160);
	pop_content.css("width",div_width*0.82);
	pop_content.css("display","block");	
}
//close popup
function makeSure(){
	$('#popup_back').css("display","none");	
	$('#popup_content').css("display","none");	
}