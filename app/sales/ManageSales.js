Ext.define('ClassicApp.orders.ManageSales',{
	extend : 'Ext.panel.Panel',
	alias  : 'widget.rmmanagesales',	
	initComponent : function(){
		var me = this;

		me.items = me.buildItems();
		me.callParent(arguments);
	},
	buildItems : function(){
		return [{
			xtype     : 'mastergrid',
			gridId    : 'managesalesgrid'
		}]
	}
});