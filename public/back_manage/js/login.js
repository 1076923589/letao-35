$(function(){
// 校驗:
// 1,用戶名不能為空,長度為2-4位
// 2.密碼不能為空 長度為6-12位


// 進行表單驗證初始化
$('#form').bootstrapValidator( {
    //配置圖標
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },

    //字段列表  field,要在input中配置name屬性
    fields: {
        username: {
            validators: {
                // 非空
                notEmpty: {
                    message: '用戶名不能為空'
                },
                // 長度校驗
                stringLength: {
                    min: 2,
                    max: 6,
                    message: '用戶名長度為2-6位'

                }
            }
        },
        password: {
            validators: {
                // 非空
                notEmpty: {
                    message: '用戶名不能為空'
                },
                // 長度校驗
                stringLength: {
                    min: 2,
                    max: 6,
                    message: '用戶名長度為2-6位'

                }
            }
        }
    }  
 })

// 使用submit 按鈕,會進行表單提交,此時表單效驗插件會立刻進行效驗
// 1.效驗成功,此時會默認提交,發生頁面跳轉註冊表單效驗成功實踐,在事件中阻止表單的默認提交
// 2.效驗失敗,自動攔截提交

// 註冊表單效驗成功實踐,在事件中阻止默認的提交,通過ajax提交
$('#form').on('success.form.bv', function( e ) {
e.preventDefault();  // 阻止默認事件

// console.log('當前事件被阻止');

$.ajax({
    url: '/employee/employeeLogin',
    type:'post',
    // 表單序列化,自動將所有配置了name屬性的input值進行普拼接 用於提交

    data: $('#form').serialize(),
    dataType: 'json',
//     success:function(){
    success: function(info) {
        console.log(info);
        if (info.error === 1000) {
            alert('用戶名不存在')
        }
        if (info.error === 1001) {
            alert('密碼輸入有誤')
        }
        if (info.success) {
            // 登錄成功,需要跳轉
            location.href = 'index.html'
        }
    }
//     }

})

})

});