define(["jquery", "cookie", "form"], function($){

	//获取之前用户登录的时候服务器返回来的头像信息
	var userInfoStr = $.cookie("userInfo");
	if(userInfoStr){
		//如果获取到了，就把这个头像设置为用户的头像		
		var userInfo = JSON.parse(userInfoStr);
		$(".avatar img").attr("src", userInfo.tc_avatar);
	}

	$("form").submit(function(){
        $("form").ajaxSubmit({
            success: function(data){
                if(data.code == 200){
                    //将登陆成功之后，返回的用户名以及用户头像存储到cookie当中
                    $.cookie("userInfo", JSON.stringify(data.result),{path: "/"});

                    //跳转页面
                    location.href = "/";

                }else{
                    alert(data.msg);
                }
            }
        });
        return false;
    });
})