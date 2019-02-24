// 进度条功能
// 开始进度条
// NProgress.start();

// setTimeout(function(){
//     NProgress.done();
// }, 2000);



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
})