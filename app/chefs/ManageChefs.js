Ext.define('ClassicApp.orders.ManageChefs',{
	extend : 'Ext.panel.Panel',
	alias  : 'widget.rmmanagechefs',	
	initComponent : function(){
		var me = this;

		me.items = me.buildItems();
		me.callParent(arguments);
	},
	buildItems : function(){
		return [{
			xtype     : 'mastergrid',
			gridId    : 'managechefgrid'
		}]
	}
});