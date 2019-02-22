$(function(){
// 校驗:
// 1,用戶名不能為空,長度為2-4位
// 2.密碼不能為空 長度為6-12位


// 進行表單驗證初始化
$('#form').bootstrapValidator( {

    //字段列表  field,要在input中配置name屬性
    fields: {
        username: {
            validators: {
                // 非空
                notEmpty: {
                    message: '用戶名不能為空'
                },
                // 長度校驗
                stringlength: {
                    min: 2,
                    max: 6,
                    message: '用戶名長度為2-4位'

                }
            }
        },
    }

})

});