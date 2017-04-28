Ext.define('RestMang.main.MainController',{
	extend : 'Ext.app.ViewController',
	alias  : 'controller.main',
	onClickTreePanelMenuItem : function(treePanel , record , item , index , e , eOpts){
		var references     = this.getReferences(),
			tabPanel       = references.masterTabPanel,
			nodeText       = record.data.text,
			tabBar         = tabPanel.getTabBar(),
			tabIndex;

		for(var i = 0;i<tabBar.items.length; i++) {
			if (tabBar.items.get(i).getText() === nodeText) {
				tabIndex = i;
			}
		}
		if (Ext.isEmpty(tabIndex)) {
			tabPanel.add({
				title       : record.data.text,
				closable    : true,	
				bodyPadding : 10,	
				items       : [{
					xtype   : record.data.view
				}]
			});
			tabIndex = tabPanel.items.length - 1;
		}
		tabPanel.setActiveTab(tabIndex);
	}
});