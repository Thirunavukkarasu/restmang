Ext.define('ClassicApp.login.LoginController',{
	extend : 'Ext.app.ViewController',
	alias  : 'controller.login',
	onClickLogin : function(){
		var me = this;

		me.getView().close();
		Ext.create('Ext.container.Viewport',{
			layout : 'fit',
			items  : [{
				xtype : 'main'
			}]
		});
	},
	onClickReset : function(){

	}
});