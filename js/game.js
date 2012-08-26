/*首页广告效果*/
$(function(){
     var len  = $(".num > li").length;
	 var index = 0;
	 var adTimer;
	 $(".num li").mouseover(function(){
		index  =   $(".num li").index(this);
		showImg(index);
	 }).eq(0).mouseover();	
	 //滑入 停止动画，滑出开始动画.
	 $('.ad').hover(function(){
			 clearInterval(adTimer);
		 },function(){
			 adTimer = setInterval(function(){
			    showImg(index)
				index++;
				if(index==len){index=0;}
			  } , 3000);
	 }).trigger("mouseleave");
	 
	 
	 $('.gamenav ul li').click(function(){
		$(this).addClass("current").siblings().removeClass("current");	
		 var index = $('.gamenav ul li').index(this);
		 $(".gamebox .gamelist").eq(index).show().siblings().hide();
		 $('.n1').addClass('navorg').siblings('a').removeClass('navorg');		 
	});
	 
	$('.shenlink').click(function(){
		$('.upfilet').show();
		$('#greylayer').show();						  
	});
	$('.close').click(function(){
		$(this).parents('.upfilet').hide();
		$('#greylayer').hide();
	});
	$('.gameclose').click(function(){
		$('.gameshow').hide();
		$('#greylayer2').hide();
	});
	/*$('.captionfull').hover(function(){$(".cover",this).stop().animate({top:'140px'},{queue:false,duration:140});}, function() {
	  $(".cover",this).stop().animate({top:'200px'},{queue:false,duration:140});});
	$('.gameout li').live("click",function(){
		$('.gameshow').show();
		$('#greylayer2').show();						  
	})
	$('.captionfull').hover(function(){
		 $(".cover",this).stop().show();						 
	},function(){
			 $(".cover",this).stop().hide();									 
	});*/
	$('.link1').click(function(){
		$('.introtex').eq(0).show().siblings().hide();
	});
	$('.link2').click(function(){
		$('.introtex').eq(1).show().siblings().hide();
	});
	$('.link3').click(function(){
		$('.introtex').eq(2).show().siblings().hide();						   
	});
	$('.link4').click(function(){
		$('.introtex').eq(3).show().siblings().hide();
	});
})
// 通过控制top ，来显示不同的幻灯片
function showImg(index){
        var adWidth = $(".content_img .ad").width();
		$(".slider").stop(true,false).animate({left : -adWidth*index},1500);
		$(".num li").removeClass("actived").eq(index).addClass("actived");
}

//导航跳转代码
function scrollT(id)
{
	$.scrollTo( id, 800, {easing:''} );
}
$(function()
{
	$.easing.elasout = function(x, t, b, c, d) 
	{
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b; if ((t/=d)==1) return b+c; if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	}; 
	$('.nav a').click(function(e) {
        $.scrollTo( $(this).attr('href'), 800, {easing:''} );
		return false;
    });	
	
});

//游戏产品
function showwy(){   
	document.getElementById('wy_youxi_Div').style.display='block';   
}
function showkhd(){   
	document.getElementById('khd_youxi_Div').style.display='block';   
}
function showios(){   
	document.getElementById('ios_youxi_Div').style.display='block';   
}
function showandroid(){   
	document.getElementById('android_youxi_Div').style.display='block';   
}
//职位招聘
function showz(v){
	for(var i=1;i<=10;i++){
	document.getElementById('z'+i).style.display='none'; 
	}
	document.getElementById('z'+v).style.display='block'; 
	}