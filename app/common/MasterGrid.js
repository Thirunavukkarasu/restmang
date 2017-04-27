Ext.define('ClassicApp.common.MasterGrid',{
	extend   : 'Ext.panel.Panel',
	alias    : 'widget.mastergrid',
	requires : [
		'ClassicApp.common.MasterGridController'
	],
	controller : 'mastergrid',
	initComponent : function(){
		var me = this;

		me.dockedItems = me.buildDockedItems();
		me.items = me.buildItems();
		me.callParent(arguments);
	},
	buildDockedItems : function(){
		return [{
			xtype  : 'toolbar',
			dock   : 'top',
			items  : [{
				xtype   : 'textfield',
				flex    : 1
			},{
				text    : 'Search',
				handler : 'onClickSearch'
			},{
				text    : 'Add',
				handler : 'onClickAdd'
			},{
				text    : 'Edit',
				handler : 'onClickEdit'
			},{
				text    : 'Delete',
				handler : 'onClickDelete'
			}]
		}];
	},
	buildItems : function(){
		return [{
			xtype   : 'gridpanel',
			gridId  : this.gridId
		}]
	}	
});