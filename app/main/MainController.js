Ext.define('RestMang.main.MainController',{
	extend : 'Ext.app.ViewController',
	alias  : 'controller.main',
	onClickTreePanelMenuItem : function(treePanel , record , item , index , e , eOpts){
		var references     = this.getReferences(),
			masterTabPanel = references.masterTabPanel;

		masterTabPanel.add({
			title    : record.data.text,
			closable : true,
			items    : [{
				xtype : record.data.view
			}]
		});

		masterTabPanel.setActiveTab(0);
	}
});