/*$(function(){
    $('.scroll-pane').jScrollPane();
    $('.scroll-pane-arrows').jScrollPane({
        showArrows:true,horizontalGutter:10
    });
});*/

define(['module_jscrollpane'],function(){
    $('.scroll-pane').jScrollPane();
    $('.scroll-pane-arrows').jScrollPane({
        showArrows:true,horizontalGutter:10
    });
});

define(['module_text'],function(){
    var text = {};
    text.get = function(){
        alert($('.scroll-pane').text());
    }
});

