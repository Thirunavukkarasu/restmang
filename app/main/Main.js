Ext.define('ClassicApp.main.Main',{
	extend   : 'Ext.panel.Panel',
	alias    : 'widget.main',
	requires : [
		'ClassicApp.main.MainController'
	],
	controller    : 'main',
	layout        : 'border',
	initComponent : function(){
		var me = this;

		me.items = me.buildItems();
		me.callParent(arguments);
	},
	buildItems : function(){
		return [{
			region      : 'north',
			width       : 100,
			xtype       : 'app-header'
		},{
			region      : 'west',
			width       : 300,
			collapsible : true,
			split       : true,
			xtype       : 'treepanel',
			title       : 'Manage RestMang',			
    		useArrows   : true,
    		store       : this.buildMenuStore(),
    		rootVisible : false,
    		listeners   : {
    			itemclick  : 'onClickTreePanelMenuItem'
    		}
		},{
			region      : 'center',
			items       : [{
				xtype     : 'tabpanel',
				reference : 'masterTabPanel' 
			}]
		}]
	},
	buildMenuStore : function(){
		var store = Ext.create('Ext.data.TreeStore', {
		    root: {
		        expanded: true,
		        children: [
		            { text: 'Manage Orders', leaf: true },
		            { text: 'Manage Suppliers', leaf: true },
		            { text: 'Manage Chefs', leaf: true },
		            { text: 'Manage Billing', leaf: true },
		            { text: 'Manage Sales', leaf: true }
		        ]
		    }
		});

		return store;
	}
});