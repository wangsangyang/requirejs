/** 商标监控交互效果 create by wsy 2016.12.19 **/

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
            $this.on('click', '.menu',function(e){
                var $menu = $(this);
                var text = $menu.text();
                $menu.addClass('checked').siblings().removeClass('checked');
                options.select(that,this);
                $this.find('.select-text .text').text(text);
                $this.removeClass('open');
                e.stopPropagation();
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
            $this.on('click', function(){
                $this.addClass('checked').siblings('.label').removeClass('checked');
                options.select(that);
            });
        });// end each
    };// end $.fn.myRadio
})(jQuery);

/* jQuery复选框插件 */
;(function($){
    var defaults = '';
    $.fn.myCheckbox = function(options){
        var options = $.extend(true, defaults, options);
        return this.each(function(){
            var that = this;
            var $this = $(this);
            $this.on('click', function(){
                var isChecked = $this.hasClass('checked');
                $this[isChecked?'removeClass':'addClass']('checked');
                options.select(that);
            });
        });// end each
    };// end $.fn.myCheckbox
})(jQuery);

