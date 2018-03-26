/** 模态confirm组件 create by wsy 2016.11.28 **/
;(function($){
    jQuery.confirm = function(options){
        var defaults = {
            closeBtn: true,
            opacity:false,
            id:'confirm',
            content: '你确定要删除吗？',
            sureText: '确 定',
            cancelText: '取 消',
            okFun: function(){},
            cancelFun: function(){}
        };
        var options = $.extend(true, defaults, options);

        var closeBtn = '';
        if(options.closeBtn){
            closeBtn = '<i class="close">×</i>';
        }

        var confirm = '<div class="confirm" id="'+ options.id +'">'+
                '<i class="opacity-bg"></i>'+
                '<div class="container">'+ closeBtn +
                    '<div class="bodyer"></div>'+
                    '<div class="footer">'+
                        '<a class="btn btn-sure">'+options.sureText+'</a>'+
                        '<a class="btn btn-cancel">'+options.cancelText+'</a>'+
                    '</div>'+
                '</div>'+
            '</div>';
        $('body').append(confirm);
        if(options.opacity){
            $('#'+options.id).addClass('noborder').find('.opacity-bg').addClass('show');
        }
        $('#'+options.id).find('.bodyer').append(options.content);

        $('body').on('click', '.btn-sure', function(){
            options.okFun();
            $('#'+options.id).remove();
            $('body').off('click','.btn-sure');
        });
        $('body').on('click', '.btn-cancel', function(){
            options.cancelFun();
            $('#'+options.id).remove();
            $('body').off('click','.btn-cancel');
        });
        $('body').on('click', '#'+options.id+' .close', function(){
            $('#'+options.id).remove();
            $('body').off('click','.close');
        });
    };
})(jQuery);

/** 模态alert组件 create by wsy 2016.12.15 **/
;(function($){
    jQuery.alert = function(options){
        var defaults = {
            closeBtn: true,
            opacity:false,
            id:'alert',
            content: '你确定要删除吗？',
            sureText: '确定',
            okFun: function(){}
        };
        var options = $.extend(true, defaults, options);

        var closeBtn = '';
        if(options.closeBtn){
            closeBtn = '<i class="close">×</i>';
        }

        var alert = '<div class="alert" id="'+ options.id +'">'+
                            '<i class="opacity-bg"></i>'+
                            '<div class="container">'+ closeBtn +
                                '<div class="bodyer"></div>'+
                                '<div class="footer">'+
                                    '<a class="btn btn-sure">确 定</a>'+
                                '</div>'+
                            '</div>'+
                        '</div>';
        $('body').append(alert);
        if(options.opacity){
            $('#'+options.id).addClass('noborder').find('.opacity-bg').addClass('show');
        }
        $('#'+options.id).find('.bodyer').append(options.content);

        $('body').on('click', '.btn-sure', function(){
            options.okFun();
            $('#'+options.id).remove();
            $('body').off('click','.btn-sure');
        });
        $('body').on('click', '#'+options.id+' .close', function(){
            $('#'+options.id).remove();
            $('body').off('click','.close');
        });
    };
})(jQuery);

/** 模态空白框组件 create by wsy 2016.12.15 **/
;(function($){
    jQuery.blankModal = function(options){
        var defaults = {
            opacity:false,
            id:'blankModal',
            content: '',
            timeout: 3000
        };
        var options = $.extend(true, defaults, options);
        var blankModal = '<div class="blankModal" id="'+ options.id +'">'+
                            '<i class="opacity-bg"></i>'+
                            '<div class="container"><div class="bodyer">'+options.content+'</div></div>'+
                        '</div>';
        $('body').append(blankModal);
        if(options.opacity){
            $('#'+options.id).addClass('noborder').find('.opacity-bg').addClass('show');
        }
        setTimeout(function(){
            $('.blankModal').remove();
        },options.timeout);
    };
})(jQuery);

/** 模态弹窗组件 create by wsy 2016.11.28 **/
;(function($){
    var defaults = {
        selfClose: true,
        okFun: function(){},
        cancelFun: function(){}
    };
    $.fn.myModal = function(options){
        var options = $.extend(true, defaults, options);
        return this.each(function(){
            var $this = $(this);
            $this.addClass('show');

            if(options.top){
                $this.find('.container').css('top',options.top);
            }

            $this.find('.btn-sure').off('click').on('click', function(){
                options.okFun();
                if(options.selfClose){
                    $this.removeClass('show');
                }
            });
            $this.find('.btn-cancel').off('click').on('click', function(){
                options.cancelFun();
                $this.removeClass('show');
            });
            $this.find('.close').off('click').on('click', function(){
                $this.removeClass('show');
            });
        });
    };
})(jQuery);

/** 关闭模态弹窗组件 create by wsy 2017.02.16 **/
;(function($){
    $.fn.myModalClose = function(){
        return this.each(function(){
            var $this = $(this);
            $this.removeClass('show');
        });
    };
})(jQuery);

/* jQuery下拉框插件 */
;(function($){
    var defaults = '';
    $.fn.mySelect = function(options){
        var options = $.extend(true, defaults, options);
        return this.each(function(){
            var that = this;
            var $this = $(this);
            $this.on('click',function(e){
                $('.mySelect').removeClass('open');
                var isOpen = $this.hasClass('open');
                $this[isOpen?'removeClass':'addClass']('open');
                e.stopPropagation();
            });
            $($this,'body').on('click', '.menu',function(event){
                var $menu = $(this);
                var text = $menu.text();
                $menu.addClass('checked').siblings().removeClass('checked');
                options.select(that,this);
                $this.find('.select-text .text').text(text);
                $this.removeClass('open');
                event.stopPropagation();
            });
        });// end each
    };// end $.fn.mySelect
})(jQuery);
$(function(){
    $('body').on('click', function(e){
        var isOpen = $('.mySelect').hasClass('open');
        if(isOpen){
            $('.mySelect').removeClass('open');
            e.stopPropagation();
        }
    });
});
/** end jQuery下拉框插件 **/

/* jQuery单选框插件 */
;(function($){
    var defaults = '';
    $.fn.myRadio = function(options){
        var options = $.extend(true, defaults, options);
        return this.each(function(){
            var that = this;
            var $this = $(this);
            $this.on('click', function(event){
                $this.addClass('checked').siblings('.label').removeClass('checked');
                options.select($(this));
                event.stopPropagation();
            });
        });// end each
    };// end $.fn.myRadio
})(jQuery);

/* jQuery复选框插件 */
;(function($){
    var defaults = '';
    $.fn.myCheckbox = function(options){
        var options = $.extend(true, defaults, options);
        var that = this;
        var $this = $(this);
        $this.on('click', function(event){
            var isChecked = $(this).hasClass('checked');
            $(this)[isChecked?'removeClass':'addClass']('checked');
            options.select($(this));
            event.stopPropagation();
        });

    };// end $.fn.myCheckbox
})(jQuery);

$(function(){
    /*mytab切换*/
    $(function(){
        $('.tabsPanel .tabs-header .list').on('click',function(){
            var index = $(this).index();
            $(this).addClass('selected').siblings().removeClass('selected');
            $(this).closest('.tabsPanel').children('.tabs-bodyer').children('.bodyer-panel').eq(index).addClass('selected').siblings().removeClass('selected');
        });
    });

    /* 下拉菜单 */
    $('.qds-dropdown').hover(function(){
        $(this).addClass('open');
    },function(){
        $(this).removeClass('open');
    });
});

/** 模态loading组件 create by wsy 2017.01.04 **/
;(function($){
    var defaults = {
        id:'loading',
        text:'',
        time:3000,
        isTime: false
    };
    jQuery.loadingCreate = function(options){
        var options = $.extend(true, defaults, options);
        var loading = '<div class="loadingModal">\
                            <i class="opacity-bg"></i>\
                            <div class="myloading"><span class="img"></span><span class="text">'+options.text+'</span></div>\
                        </div>';
        $('body').append(loading);
        if(options.isTime){
            setTimeout(function(){
                $('.loadingModal').remove();
            },options.time);
        }
    };
})(jQuery);
;(function($){
    jQuery.loadingClose = function(options){
        var defaults = {};
        var options = $.extend(true, defaults, options);
        $('.loadingModal').remove();
    };
})(jQuery);

