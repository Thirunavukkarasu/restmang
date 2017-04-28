Ext.define('RestMang.framework.grid.IeGridDialog',{
	extend     : 'Ext.window.Window',
	alias      : 'widget.iegriddialog',
	title      : 'Add/Edit Dialog',
	autoShow   : true,
	width      : 500,
	height     : 400,
	autoScroll : true,
	modal      : true,
	initComponent : function(){
		var me = this;

		me.items   = me.buildItems();
		me.buttons = me.buildButtons();
		me.callParent(arguments);
	},
	buildItems    : function(){
		var me             = this,
			metadata       = me.rmConfig.metadata,
			selectedRecord = me.rmConfig.selectedRecord, 
			openType       = me.rmConfig.openType,
			formItems      = [];

		//assemble formItems from the metadata received
		for(var i=0;i< metadata.length;i++){
			var formField = {
				xtype      : 'textfield',
				fieldLabel : metadata[i].text 
			};

			//if openType is edit then show the selected values
			if(openType==="edit"){
				formField.value = selectedRecord.data[metadata[i].dataIndex]
			}
			formItems.push(formField);
		}

		return [{
			xtype       : 'form',
			bodyPadding : 20,
			items       : formItems
		}];
	},
	buildButtons  : function(){
		return [{
			text : 'Save'
		},{	
			text : 'Cancel'
		}];
	}
});