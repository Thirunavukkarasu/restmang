Ext.define('RestMang.login.Login',{
	extend        : 'Ext.Window',
	alias         : 'widget.login',
	requires      : [
		'RestMang.login.LoginController'
	],
	width         : 350,
	height        : 250,
	autoShow      : true,
	closable      : false,	
	resizable     : false,
	draggable     : false,
	title         : 'Welcome to RestMang!',
	controller    : 'login',
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
				xtype        : 'textfield',
				fieldLabel   : 'Username',
				value        : 'manager',
			},{
				xtype        : 'textfield',
				inputType    : 'password',
				fieldLabel   : 'Password',
				value        : 'manager'
			},{
				xtype        : 'combobox',
				fieldLabel   : 'Role',
			    store        : this.buildRolesStore(),
			    value        : 'manager',
			    queryMode    : 'local',
			    displayField : 'name',
			    valueField   : 'value'
			}]
		}]
	},
	buildRolesStore : function(){
		var store = Ext.create('Ext.data.Store', {
		    fields: [],
		    data : [
		    	{"name":"Biller", "value":"BILLER"},
		        {"name":"Chasier", "value":"CHASIER"},
		        {"name":"Manager", "value":"MANAGER"}
		    ]
		});

		return store;
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