/* jquery.backgroundPosition插件 */
;(function($) {
    if(!document.defaultView || !document.defaultView.getComputedStyle){
        var oldCurCSS = jQuery.curCSS;
        jQuery.curCSS = function(elem, name, force){
            if(name === 'background-position'){
                name = 'backgroundPosition';
            }
            if(name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[ name ]){
                return oldCurCSS.apply(this, arguments);
            }
            var style = elem.style;
            if ( !force && style && style[ name ] ){
                return style[ name ];
            }
            return oldCurCSS(elem, 'backgroundPositionX', force) +' '+ oldCurCSS(elem, 'backgroundPositionY', force);
        };
    }

    var oldAnim = $.fn.animate;
    $.fn.animate = function(prop){
        if('background-position' in prop){
            prop.backgroundPosition = prop['background-position'];
            delete prop['background-position'];
        }
        if('backgroundPosition' in prop){
            prop.backgroundPosition = '('+ prop.backgroundPosition + ')';
        }
        return oldAnim.apply(this, arguments);
    };

    function toArray(strg){
        strg = strg.replace(/left|top/g,'0px');
        strg = strg.replace(/right|bottom/g,'100%');
        strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
        var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
        return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
    }

    $.fx.step.backgroundPosition = function(fx) {
        if (!fx.bgPosReady) {
            var start = $.curCSS(fx.elem,'backgroundPosition');

            if(!start){//FF2 no inline-style fallback
                start = '0px 0px';
            }

            start = toArray(start);

            fx.start = [start[0],start[2]];

            var end = toArray(fx.end);
            fx.end = [end[0],end[2]];

            fx.unit = [end[1],end[3]];
            fx.bgPosReady = true;
        }

        var nowPosX = [];
        nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
        nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
        fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];
    };
})(jQuery);/* end jquery.backgroundPosition插件 */


/** 数字动态翻滚控件 create by wangsongyang in 2016.03.17 **/
/** 1、此组件依赖于jQuery（jQuery版本最好是1.7.2，因为在高版本的jQuery中出问题）**/
/** 2、此组件依赖于backgroundPosition插件控件 **/
/**
var defaults = {
    number: ''//初始默认数字为空
};
**/

;(function($){
    var imgHeight = 24;/*单个数字图片的高度*/
    var speed = 400;/*数字滚动的速度（可以使数字，也可以使'slow'、'normal'、'fast'）*/
    var defaults = { };
	$.fn.scrollNumber = function(options){
		var options = $.extend(true, defaults, options);
		return this.each(function(){
            var $this = $(this);
            var number = $.trim($this.text()||(options.number));
            $this.attr('data-scrollNumber',number);
            $this.empty();
            var reg = /^\d*$/;
            if( reg.test(number) ){
                var iconNumberLength = $this.find('.icon-statistic').length;
                var numberArray = String(number).split('');
                for(var i=0; i<numberArray.length; i++){
                    if(iconNumberLength<=i){
                        $this.append('<span class="icon icon-statistic"></span>');
                    }
                    $this.find('.icon-statistic').eq(i).animate({'backgroundPosition': '(0px '+ numberArray[i]*-imgHeight +'px)'},speed,'swing');
                }
            }
		});// end each		

	};// end $.fn.openDialog

})(jQuery);