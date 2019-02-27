$(function () {
    // 一进入页面就应该发送请求动态渲染页面
    var currentPage = 1;  //当前页
    var pageSize = 5 ;   //每一页的数据
    var currentId;  // 标记当前正在编辑的用户 id
    var isDelete;  // 标记修改用户成什么状态
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
            // console.log(res);
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
                currentPage = page;
                aaa();           
                }
            })
        }
    })
   }

  // 思路: 使用事件委托绑定按钮点击事件
  $('tbody').on('click', '.btn', function() {

    // 显示模态框
    $('#userModal').modal('show');

    // 获取 id
    currentId = $(this).parent().data('id');
    // console.log(currentId);
    

    // 获取启用禁用状态
    // 有btn-danger类 => 禁用按钮
    // 禁用按钮 ? 改成禁用状态 0 : 改成启用状态 1
    isDelete = $(this).hasClass('btn-danger') ? 0 : 1;
  });


  // 给模态框的确定按钮, 添加点击事件
  $('#confirmBtn').click(function() {
    // 发送ajax请求, 完成用户状态的编辑

    // 传参需要两个 id  isDelete
    $.ajax({
      type: 'post',
      url: '/user/updateUser',
      data: {
        id: currentId,
        isDelete: isDelete
      },
      dataType: 'json',
      success: function( res ) {
        // console.log( info );
        if (res.success) {
          // 关闭模态框
          $('#userModal').modal('hide');
          // 重新调用 render 完成渲染
          aaa();
        }
      }
    })
  })

})