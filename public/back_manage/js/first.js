$(function () {
    var pageSize = 5; //每页条数  
    var currentPage = 1;   //当前页

    aaa();
    function aaa() {
        $.ajax({
            url: '/category/queryTopCategoryPaging',
            type: 'get',
            dataType: 'json',
            data: {
                page: currentPage,
                pageSize: pageSize,
            },
            success: function (res) {
                console.log(res);
                var htmlStr = template('one_1', res)
                $('tbody').html(htmlStr);

                // 完成分頁初始化
                $('#paginator').bootstrapPaginator({
                    // 1.版本號
                    bootstrapMajorVersion: 3,
                    // 當前頁
                    currentPage: res.page,
                    // 總頁數
                    totalPages: Math.ceil(res.total / res.size),

                    onPageClicked: function (a, b, c, page) {
                        currentPage = page;
                        aaa();
                    }
                })
            }


        })
    }

    // 點擊按鈕顯示模態框
    $('#addBtn').on('click', function () {
        $('#addModal').modal('show')
    });

    // 3.完成添加功能

    $('#form').bootstrapValidator({

        // 配置图标
        // feedbackIcons: {
        //     valid: 'glyphicon glyphicon-ok',
        //     invalid: 'glyphicon glyphicon-remove',
        //     validating: 'glyphicon glyphicon-refresh'
        // },
        // 配置需要校驗的字段

        fields: {
            categoryName: {
                // 校驗規則
                validators: {
                    // 非空校驗
                    notEmpty: {
                        message: '請輸入一級分類名'
                    }
                }
            }
        }
    });

    // 注册表单校验成功事件 阻止默认提交，，使用ajax提交

    $('#form').on('success.form.bv' , function(e) {
        e.preventDefault(); // 阻止默认的提交
        $.ajax({
            type: 'post',
            url: '/category/addTopCategory',
            data: $('#form').serialize(),
            dataType: 'json',
            success: function(res) {
           
              if (res.success) {
                // 说明添加成功
                // 关闭模态框
                $('#addModal').modal('hide');
                // 重新渲染页面, 重新渲染第一页
                currentPage = 1;
                aaa();
      
      
                // 将表单的内容和状态都要重置
                $('#form').data('bootstrapValidator').resetForm(true);
              }
            }
          })
        })
      
})