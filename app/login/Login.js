Ext.define('RestMang.login.Login',{
	extend   : 'Ext.Window',
	alias    : 'widget.login',
	width    : 350,
	height   : 200,
	autoShow : true,
	closable : false,	
	title    : 'Welcome to RestMang!',
	controller : 'login',
	initComponent : function(){
		var me = this;

		me.items = me.buildItems();
		me.buttons = me.buildButtons();
		me.callParent(arguments);
	},
	buildItems : function(){
		return [{
			xtype       : 'form',
			bodyPadding : 20,
			items       : [{
				xtype      : 'textfield',
				fieldLabel : 'Username'
			},{
				xtype      : 'textfield',
				inputType  : 'password',
				fieldLabel : 'Password'
			}]
		}]
	},
	buildButtons : function(){
		return [{
			text    : 'Login',
			handler : 'onClickLogin'
		},{
			text    : 'Reset',
			handler : 'onClickReset'
		}]
	}
});