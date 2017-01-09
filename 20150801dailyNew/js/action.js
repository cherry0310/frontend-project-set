var generalState=0;
var priceState=0;
var discountState=0;
//sort by general	
function generalSort(){
	switch(generalState){
		case 0://排序
			$("#general span").css("color","#ffb341");
			generalState=1;
			$("#price i").attr("class","price");
			$("#price").css("color","#515151");
			priceState=0;
			$("#discount i").attr("class","discount");
			$("#discount").css("color","#515151");
			discountState=0;
			break;
		case 1://取消排序
			$("#general span").css("color","#515151");
			generalState=0;
			break;
		default:
			break;	
	}
}
//sort by price		
function priceSort(){
	switch(priceState){
		case 0://升序
			$("#price i").attr("class","price_up");
			$("#price").css("color","#ffb341");
			priceState=1;
			$("#general span").css("color","#515151");
			generalState=0;
			$("#discount i").attr("class","discount");
			$("#discount").css("color","#515151");
			discountState=0;
			break;
		case 1://降序
			$("#price i").attr("class","price_down");
			priceState=2;
			break;
		case 2://取消排序
			$("#price i").attr("class","price");
			$("#price").css("color","#515151");
			priceState=0;
			break;
		default:
			break;
	}
}
//sort by discount
function discountSort(){
	switch(discountState){
		case 0://升序
			$("#discount i").attr("class","discount_up");
			$("#discount").css("color","#ffb341");
			discountState=1;
			$("#general span").css("color","#515151");
			generalState=0;
			$("#price i").attr("class","price");
			$("#price").css("color","#515151");
			priceState=0;
			break;
		case 1://降序
			$("#discount i").attr("class","discount_down");
			discountState=2;
			break;
		case 2://取消排序
			$("#discount i").attr("class","discount");
			$("#discount").css("color","#515151");
			discountState=0;
			break;
		default:
			break;
	}
}		
//set .line marginTop
function setMarginTop(){
	var g_w=$(window).width();
	if(g_w>640){g_w=640;}
	var pic_width=(g_w-20)*0.02;	
	$(".line").css("marginTop",pic_width);						
}
//tab select
		function select(id){
			$("#li"+id).attr("class","selected");
			$("#content"+id).css("display","block");
			for(var i=1;i<=16;i++){
				if(i!=id){
					$("#li"+i).attr("class","");
					$("#content"+i).css("display","none");
				}
			}
		}
//set sidebar&content height
function setHeight(){
	var g_height=$(window).height();
	//alert(g_height);
	$(".sidebar").css("height",g_height);
	$(".content").css("height",g_height);
	$("body").css("height",g_height);
}