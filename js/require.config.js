(function(window){
    var requireconfig = {

        init: function(options){
            var _default = {
                bootstrap:false,
            };
            this.option = options||_default;
            var bootstrap = this.option.bootstrap;
            alert(bootstrap);
            if(bootstrap){
                require(['bootstrap'],function(bootstrap){

                });
            }

        }
    }

    window.requireconfig = requireconfig;
})(window);



//前台页面配置参数
/*var options = {
    bootstrap:true,
};
alert(requireconfig);
requireconfig.init(options);*/
