Ext.define('ClassicApp.orders.ManageBilling',{
	extend : 'Ext.panel.Panel',
	alias  : 'widget.rmmanagebilling',
	initComponent : function(){
		var me = this;

		me.items = me.buildItems();
		me.callParent(arguments);
	},
	buildItems : function(){
		return [{
			xtype     : 'mastergrid',
			gridId    : 'managebillinggrid'
		}]
	}
});