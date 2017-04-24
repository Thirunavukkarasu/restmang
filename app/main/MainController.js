Ext.define('ClassicApp.main.MainController',{
	extend : 'Ext.app.ViewController',
	alias  : 'controller.main',
	onClickTreePanelMenuItem : function(treePanel , record , item , index , e , eOpts){
		var references     = this.getReferences(),
			masterTabPanel = references.masterTabPanel;

		masterTabPanel.add({
			title    : record.raw.text,
			closable : true,
			items    : [{
				xtype : 'component',
				html  : '<h1>Hello World!</h1>'
			}]
		});

		masterTabPanel.setActiveTab(0);
	}
});