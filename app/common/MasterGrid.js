Ext.define('RestMang.common.MasterGrid',{
	extend     : 'Ext.panel.Panel',
	alias      : 'widget.mastergrid',
	requires   : [
		'RestMang.common.MasterGridController'
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
				iconCls : 'fa fa-search',
				handler : 'onClickSearch'
			},{
				text    : 'Add',
				iconCls : 'fa fa-plus',
				handler : 'onClickAdd'
			},{
				text    : 'Edit',
				iconCls : 'fa fa-pencil',
				handler : 'onClickEdit'
			},{
				text    : 'Delete',
				iconCls : 'fa fa-trash',
				handler : 'onClickDelete'
			}]
		}];
	},
	buildItems : function(){
		return [{
			xtype   : 'gridpanel',	
			gridId  : this.gridId,
			flex    : 1,
		    selModel: {
		        selType: 'checkboxmodel',
		        checkOnly: false
		    },
		    columnLines: true,
		    viewConfig: {
		        enableTextSelection: true
		    }			
		}]
	}	
});
