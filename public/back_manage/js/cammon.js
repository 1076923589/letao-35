// 进度条功能
// 开始进度条
NProgress.start();

setTimeout(function(){
    NProgress.done();
}, 500);



// 在发送第一个ajax请求,开启进度条
// 在全部的ajax回来,关闭进度条
// ajax全局事件
// 。ajaxComplete(fn);每个ajax完成,都回去调用fn回调函数(不论成功失败)
// .ajaxSuccess(fn); 每个ajax只要成功了,就会调用fn
// .ajaxError(fn); 每个ajax只要失败了,就会调用fn
// .ajaxSend(fn);每个ajax发送前都会调用


// .ajaxStart(fn);  在第一个ajax发送时,调用fn
// .ajaxStop(fn);  在所有ajax请求完成时,调用fn(不管成功失败)

// 在第一个ajax发送时.开始进度条
$(document).ajaxStart(function(){
    // 开始进度条
    NProgress.start();
})
// 全部ajax完成时 关闭
$(document).ajaxStart(function(){
    // 开始进度条
    // 模拟延迟效果
    setTimeout(function() {
        NProgress.done();
    },500);
});


// 公共部分功能
// 1.左侧二级菜单的切换
// 2.左侧整体彩带的切换
// 3.公共退出功能

// 等待dom加完完成执行

$(function () {
    // 左侧二级菜单切换
    $('.lt_aside .category').click(function(){
    // 找到下一个兄弟元素,显示
    $(this).next().stop().slideToggle();
//    console.log($(this));
    // console.log(this);
    });

//    console.log($('.lt_topbar .icon_menu'));
//    2.左侧整体菜单的切换
$('.lt_topbar .icon_menu').click(function(){
    console.log(1234);
    // 让左侧菜单切换显示
    $('.lt_aside').toggleClass('hidemenu');
    $('.lt_main').toggleClass('hidemenu');
    $('.lt_topbar').toggleClass('hidemenu');

});

// 3.退出功能
// 点击退出按钮,显示一个模态框
$('.lt_topbar .icon_logout').click(function(){
    $('#logoutModal').modal('show')
});

// 点击模态框的退出按钮,表示确认退出
$('#logoutBtn').click(function() {
    // location = 'login.html'
    $.ajax({
        type: 'get',
        url: '/employee/employeeLogout',
        dataType: 'json',
        success: function( info ){
            if (info.success) {
                // 退出成功
                location = 'login.html'

            }
            
        }

    })
})
})