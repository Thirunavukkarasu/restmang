Ext.define('RestMang.common.MasterGridController',{
	extend : 'Ext.app.ViewController',
	alias  : 'controller.mastergrid',
	control :{
		'mastergrid': {
			'boxready' : 'onBoxReadyMasterGrid'
		}
	},
	onBoxReadyMasterGrid : function(){
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
				//assign both columns and datastore together dynamically using reconfigure method
				grid.reconfigure(gridStore,decodedResponse.metadata);
			},
			failure : function(response){
				console.log("Failed to load the grid!");
			}
		})  
	}
});