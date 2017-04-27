Ext.define('RestMang.common.MasterGridController',{
	extend : 'Ext.app.ViewController',
	alias  : 'controller.mastergrid',
	onClickSearch : function(){
		var view  = this.getView(),
			grid  = view.query('gridpanel')[0],
			decodedResponse, gridStore;

		Ext.Ajax.request({
			url     : 'resources/mock/'+grid.gridId+'.json',
			method  : 'POST',
			scope   : this,
			success : function(response){
				decodedResponse = Ext.decode(response.responseText);
				gridStore       = Ext.create('Ext.data.Store', {
		    		fields : [],
		    		data   : decodedResponse.data
				});

				grid.reconfigure(gridStore,decodedResponse.metadata);
			},
			failure : function(response){

			}
		})  
	}
});