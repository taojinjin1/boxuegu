define(["jquery","template", "cookie" ], function ($, template) {
	//下面这段代码不能再login页面中执行，因为login页面中没有侧变栏，不需要加载头像以及用户名信息
	if(!(location.pathname == "/login" || location.pathname == "/dashboard/login" || location.pathname == "/index.php/dashboard/login")){
		var userInfo = JSON.parse($.cookie("userInfo"));
		var htmlStr = template("userInfoTpl", userInfo);
		$("#profile").html(htmlStr);
	}
})




