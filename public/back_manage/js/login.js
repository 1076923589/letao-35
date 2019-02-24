$(function() {
    /*
     * 1. 进行表单校验配置
     *    校验要求:
     *        (1) 用户名不能为空, 长度为2-6位
     *        (2) 密码不能为空, 长度为6-12位
     * */
  
    // 进行表单校验初始化
    $('#form').bootstrapValidator({
      // 配置图标
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
  
      // 字段列表  field,  要先在 input 中配置 name 属性
      fields: {
        // 用户名
        username: {
          // 校验规则
          validators: {
            // 非空
            notEmpty: {
              // 提示信息
              message: '用户名不能为空'
            },
            // 长度校验
            stringLength: {
              min: 2,
              max: 6,
              message: '用户名长度为2-6位'
            },
            // callback 专门用于配置回调提示消息
            callback: {
              message: '用户名不存在'
            }
          }
        },
        // 密码
        password: {
          // 配置校验规则
          validators: {
            notEmpty: {
              message: '密码不能为空'
            },
            stringLength: {
              min: 6,
              max: 12,
              message: '密码长度必须是6-12位'
            },
            callback: {
              message: '密码错误'
            }
          }
        }
      }
    });
  
  
    /* 
      2. 使用 submit 按钮, 会进行表单提交, 此时表单校验插件会立刻进行校验
         (1) 校验成功, 此时会默认提交, 发生页面跳转,  注册表单校验成功事件, 在事件中阻止默认的跳转提交, 通过ajax提交
         (2) 校验失败, 自动拦截提交
  
        注册表单校验成功事件, 在事件中阻止默认的提交, 通过ajax提交
    */
    $('#form').on('success.form.bv', function( e ) {
      // 阻止默认的提交
      e.preventDefault();
  
      // console.log('当前默认的表单提交已经被阻止, 我们通过ajax提交');
  
      $.ajax({
        type: 'post',
        // 本质上会自动拼接上前面的域名端口  http://localhost:3000/employee/employeeLogin
        url: '/employee/employeeLogin', 
        // 表单序列化, 自动将所有配置了 name 属性的 input 值进行拼接, 用于提交  
        data: $('#form').serialize(),
        dataType: 'json',
        success: function( info ) {
          console.log( info );
  
          if (info.error === 1000) {
            // alert('用户名不存在');
            // 调用插件实例方法, 更新username字段状态成失败状态
            // updateStatus( field, status, validator );
            // 参数1: 需要更新的字段名称
            // 参数2: 需要更新成的状态  VALID 成功  INVALID 失败
            // 参数3: 配置校验规则, 将来会用配置的规则的 message 进行提示
            $('#form').data('bootstrapValidator').updateStatus( 'username', 'INVALID', 'callback' );
          }
          if (info.error === 1001) {
            // alert('密码错误');
            $('#form').data('bootstrapValidator').updateStatus('password', 'INVALID', 'callback');
          }
          if (info.success) {
            // 登录成功, 跳转首页
            location.href = 'index.html';
          }
        }
      })
  
    });
  
  
    /* 
      3. 表单重置功能
         reset 按钮, 本身就可以重置内容, 所以此时只需要重置状态即可
         resetForm(false);  只重置状态
         resetForm(true);   重置内容和状态
    */
    $('[type="reset"]').click(function() {
      // 重置状态即可
      $('#form').data('bootstrapValidator').resetForm();
    })
  });