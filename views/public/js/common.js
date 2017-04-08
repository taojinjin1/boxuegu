define(["jquery","template", "cookie" ], function ($, template) {
	var userInfoStr=$.cookie("userInfo");
	//做访问限制
	if(!userInfoStr){
		  $.cookie("userInfo","");
         location.href="/login";
	}else{
		//下面这段代码不能再login页面中执行，因为login页面中没有侧变栏，不需要加载头像以及用户名信息
	
	if(!(location.pathname == "/login" || location.pathname == "/dashboard/login" || location.pathname == "/index.php/dashboard/login")){
		var userInfo = JSON.parse(userInfoStr);
		var htmlStr = template("userInfoTpl", userInfo);
		$("#profile").html(htmlStr);
	}
	}

	//navs部分功能
	$(".navs>ul>li>ul").parent().click(function(){
		$(this).children().slideToggle();
	})
})





