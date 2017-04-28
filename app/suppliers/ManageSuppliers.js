Ext.define('RestMang.orders.ManageSuppliers',{
	extend  : 'Ext.panel.Panel',
	alias   : 'widget.rmmanagesuppliers',	
	initComponent : function(){
		var me = this;

		me.items = me.buildItems();
		me.callParent(arguments);
	},
	buildItems : function(){
		return [{
			xtype     : 'mastergrid',		
			gridId    : 'managesuppliergrid'
		}]
	}
});