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
                    }
                })
            }


        })
    }
    $('#addBtn').on('click', function () {

        // alert(1111)
    })


































})