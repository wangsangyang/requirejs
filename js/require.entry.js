
require.config({
    //定义所有JS文件的基本路径,实际这可跟script标签的data-main有相同的根路径
    baseUrl:"js",
    //定义各个JS框架路径名,不用加后缀 .js
    map: {
        '*': {
            'css': 'css.min'
        }
    },
    paths:{
        "jquery":"jquery-1.9.1.min" ,//把对应的 jquery 这里写对即可
        "date97":"My97DatePicker/WdatePicker",
        "layer":"layer/layer",
        "vue":"vue",
        "vuecompontent":"../adminManage/vue.component",
        "adminManage":"adminManage",
        "bootstrap":"../bootstrap/js/bootstrap.min",
        "jscrollpane":"jquery-jscrollpane/js/jquery.jscrollpane.min",
        "mousewheel":"jquery-jscrollpane/js/jquery.mousewheel",
        "module_jscrollpane":"module.jscrollpane",
    },
    shim:{
        bootstrap:{
            deps:['css!../bootstrap/css/bootstrap.min.css','css!../bootstrap/css/bootstrap-theme.min.css'],
            exports: 'layer'
        },
        layer:{
            deps:['css!../js/layer/skin/default/layer.css','css!../css/adminManage.css'],
            exports: 'layer'
        },
        'module_jscrollpane':{
            deps:['jscrollpane','mousewheel','css!jquery-jscrollpane/style/jquery.jscrollpane.css'],
            exports: 'jScrollPane'
        },
    },
    waitSeconds: 7

});



require(['jquery','date97','layer','vue','vuecompontent','adminManage'],function($,date97,layer,vue,vuecompontent,adminManage){
    layer.config({
        path: 'js/layer/'//layer.js所在的目录，可以是绝对目录，也可以是相对目录
    });

    var requireconfig = $('#requireconfig');

    var bootstrap = requireconfig.attr('bootstrap');
    if(bootstrap==='true'){
        require(['bootstrap']);
    }
    var jscrollpane = requireconfig.attr('jscrollpane');
    if(jscrollpane==='true'){
        require(['module_jscrollpane'],function(module_text){

            //module_text.get();
        });


    }


});









