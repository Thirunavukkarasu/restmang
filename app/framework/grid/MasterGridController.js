Ext.define('RestMang.framework.grid.MasterGridController',{
	extend  : 'Ext.app.ViewController',
	alias   : 'controller.mastergrid',
	control : {
		'mastergrid': {
			'boxready' : 'onBoxReadyMasterGrid'
		}
	},
	onBoxReadyMasterGrid : function(){
		var grid   = this.getView(),
			vm     = this.getViewModel(),
			vmData = vm.getData(),
			decodedResponse, gridStore;

		Ext.Ajax.request({
			url     : 'resources/mock/'+grid.gridId+'.json',
			method  : 'GET',
			scope   : this,
			success : function(response){
				decodedResponse = Ext.decode(response.responseText);
				gridStore       = Ext.create('Ext.data.Store', {
		    		fields : [],
		    		data   : decodedResponse.data
				});
				vmData.gridMetaData = decodedResponse.metadata;
				//assign both columns and datastore together dynamically using reconfigure method
				grid.reconfigure(gridStore,decodedResponse.metadata);
			},
			failure : function(response){
				console.log("Failed to load the grid!");
			}
		})  
	},
	onClickSearch : function(){
		console.log("Remote search functionality need to be included!");
	},
	onClickAdd    : function(){
		var grid   = this.getView(),
			vm     = this.getViewModel(),
			vmData = vm.getData();

		Ext.widget('iegriddialog',{
			rmConfig : {
				openType : 'add',
				metadata : vmData.gridMetaData
			}
		});
	},
	onClickEdit   : function(){
		var grid            = this.getView(),
			vm              = this.getViewModel(),
			vmData          = vm.getData(),
			selectedRecord  = grid.getSelectionModel().getSelection()[0];

		if(selectedRecord){
			Ext.widget('iegriddialog',{
				rmConfig : {
					openType       : 'edit',
					metadata       : vmData.gridMetaData,
					selectedRecord : selectedRecord
				}
			});
		}
		else{
			Ext.toast({
	            html     : "Inorder to edit you have select a record in the grid!",
	            closable : false,
	            align    : 't',
	            slideInDuration: 400,
	            minWidth : 400
	        });			
		}
	},
	onClickDelete : function(){
		var me   = this,
			grid = me.getView();

		Ext.MessageBox.confirm('Confirm', 'Are you sure you want to delete this record?', me.onClickConfirmationDialog, me);		
	},
	onClickConfirmationDialog: function(btn, text) {
		if(btn=="yes"){
			Ext.toast({
	            html     : "Record deleted successfully!",
	            closable : false,
	            align    : 't',
	            slideInDuration: 400,
	            minWidth : 400
	        });
		}
    }
});