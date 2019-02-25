$(function () {
    // 一进入页面就应该发送请求动态渲染页面
    var currentPage = 1;  //当前页
    var pageSize = 5 ;   //每一页的数据

    aaa();
   function aaa() {
    $.ajax({
        url:'/user/queryUser',
        type: 'get',
        data: {
            page: currentPage,
            pageSize: pageSize
        },
        dataType: 'json',
        success: function( res ){
            console.log(res);
            var htmlStr = template('tp1',res);
            // 渲染数据
            $('tbody').html(htmlStr);

            // 根据请求回来的数据,完成分页的初始化显示
            $('#pagnator').bootstrapPaginator({
        
                // 配置版本号
                bootstrapMajorVersion: 3,
                // 当前页
                currentPage: res.page,
                // 总页数
                totalPages: Math.ceil(res.total / res.size),
                // 控制空间大小
                // size默认就行
                onPageClicked:function(a,b,c,page) {
                    // 为按钮注册点击事件
                //    console.log(page);
                // 更新currentPage  重新渲染
                currentPage=page;
                aaa();           
                }
            })
      
        }
    })
   }

   
})