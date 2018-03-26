/*create by wangsongyang in 2016.03.09*/

/*此文件用于登录、注册*/

/*清空输入框*/
$(function(){
    $('#loginWindow').on('click', '.icon-clear', function() {
        $(this).closest('.list').find('.full-input').val('');
    });
});
var myloading = '<div class="myloading"><em class="icon icon-loading"></em><span class="text">内容加载中</span></div>';
/*打开登录窗口*/
function loginFunc(title,url){
    $('#loginWindow').openPopUI({
        maskStyle:{'opacity':0.7},
        width: 360,
        top:'25%'
    });
    $('#loginWindow .popUI-header .text').text(title);
    $('#loginWindow .popUI-body').append(myloading);
    $('#loginWindow .popUI-body').empty().load(url);
}
/*打开注册窗口*/
function registerFunc(title,url){
    $('#loginWindow').openPopUI({
        maskStyle:{'opacity':0.7},
        width: 360,
        top:'20%'
    });
    $('#loginWindow .popUI-header .text').text(title);
    $('#loginWindow .popUI-body').append(myloading);
    $('#loginWindow .popUI-body').empty().load(url);
}
/*切换成邮箱登录窗口*/
function emailLoginFunc(title,url){
    $('#loginWindow').openPopUI({
        maskStyle:{'opacity':0.7},
        width: 360,
        top:'25%'
    });
    $('#loginWindow .popUI-header .text').text(title);
    $('#loginWindow .popUI-body').append(myloading);
    $('#loginWindow .popUI-body').empty().load(url);
}

/*邮箱登录成功并跳转到绑定手机号*/
function isSuccessEmailLogin(title,url){
    $('#loginWindow').openPopUI({
        maskStyle:{'opacity':0.7},
        width: 360,
        top:'25%'
    });
    var value = $.trim( $('#email-way .phone-number-input').val() );
    if(value){
        $('#loginWindow .popUI-header .text').text(title);
        $('#loginWindow .popUI-body').append(myloading);
        $('#loginWindow .popUI-body').empty().load(url);
    }
}
/*绑定手机号成功并用手机号登录成功*/
function isPhoneNumberLogin(title,url){
    $('#loginWindow').openPopUI({
        maskStyle:{'opacity':0.7},
        width: 360,
        top:'25%'
    });
    var value = $.trim( $('#phone-way .phone-number-input').val() );
    if(value){
        $('#loginWindow .popUI-header .text').text(title);
        $('#loginWindow .popUI-body').append(myloading);
        $('#loginWindow .popUI-body').empty().load(url);
    }
}

$(function(){
    /*切换成：短信登录方式*/
    $('body').on('click', '#username-way .kuaijie .k-1', function(){
        $('#sms-way').show();
        $('#username-way').hide();
    });
    /*切换成：账号密码登录方式*/
    $('body').on('click', '#sms-way .change-way a', function(){
        $('#sms-way').hide();
        $('#username-way').show();
    });
});

/* start 发送验证码倒计时 */
var setIntervalFunc;
function sendYZM(t){
    var $this = $(t);
    var isRun = $this.attr('data-run');
    var startSecond = $this.attr('data-startSecond');
    //console.log(isRun+'/'+startSecond);
    if(isRun=='true'){
        isRun = 'false';
        $this.attr('data-run',isRun);
        console.log(isRun+'/'+startSecond);
        alert('写自己的代码');
        $this.text(startSecond+'s').addClass('disabled');
        changeSecond($this,startSecond);
    }
}

function changeSecond($this,startSecond){
    var multiTime = 1;
    var intervalTime = 1000;
    setIntervalFunc = setInterval(function(){
        startSecond--;
        //console.log(startSecond);
        if(startSecond>=0){
            //console.log(isRun);
            $this.text(startSecond+'s');
        }else{
            clearInterval(setIntervalFunc);
            isRun = 'true';
            $this.attr('data-run',isRun);
            $this.text('重新发送').removeClass('disabled');
            multiTime++;
            startSecond = parseInt($this.attr('data-startSecond'))*multiTime;
            $this.attr('data-startSecond',startSecond);
        }
    }, intervalTime);
}
/* end 发送验证码倒计时 */


/*验证手机号是否合法，合法返回true，不合法返回false*/
function checkPhone(str){
    var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if(reg.test(str)){
        return true;
    }else{
        return false;
    }
}

/*验证手机号是否合法，合法返回error1、error2、true*/
function isPhoneNumber(phoneNumber){
    /* _error值为error1：代表手机号为空，_error值为error2：代表手机号为空，_error值为true：代表手机号为不为空并且合法 */
    var _error = '';
    if(phoneNumber==''){/*如果手机号为空*/
        _error = 'error1';
    }else if(!checkPhone(phoneNumber)){/*如果手机号不为空，但是手机号不合法*/
        _error = 'error2';
    }else{/*如果手机号不为空，而且手机号合法*/
        _error = 'true';
    }
    return _error;
}

/*验证手机号是否合法，合法返回error1、error2、true*/
function isPassword(pw){
    /* _error值为error1：代表手机号为空，_error值为error2：代表手机号为空，_error值为true：代表手机号为不为空并且合法 */
    var _error = '';
    if(pw==''){/*如果手机号为空*/
        _error = 'error1';
    }else if(!checkPhone(phoneNumber)){/*如果手机号不为空，但是手机号不合法*/
        _error = 'error2';
    }else{/*如果手机号不为空，而且手机号合法*/
        _error = 'true';
    }
    return _error;
}

