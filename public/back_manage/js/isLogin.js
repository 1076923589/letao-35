
// 前端一般可以发送 ajax 请求, 去检测用户的登录状态, 如果未登录, 进行拦截, 拦截到登录页
$.ajax({
    type: 'get',
    url: '/employee/checkRootLogin',
    dataType: 'json',
    success: function( info ) {
      console.log( info )
      if (info.error === 400) {
        // 用户未登录, 拦截到登录页
        location.href = 'login.html';
      }
    }
  })