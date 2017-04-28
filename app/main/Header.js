Ext.define('RestMang.main.Header',{
	extend : 'Ext.toolbar.Toolbar',
	alias  : 'widget.app-header',
	cls    : 'app-header',
	initComponent : function(){
		var me = this;

		me.items = me.buildItems();
		me.callParent(arguments);
	},
	buildItems : function(){	
		return [{
			xtype   : 'component',
			html    : this.buildHeaderCaptionHtml()
		},'->',{
			text    : 'Profile',
	        iconCls : 'fa fa-user'
	    },{
	        text    : 'Logout',
	        iconCls : 'fa fa-sign-out'
	    }];
	},
	buildHeaderCaptionHtml : function(){
		var html = '<div class="headerwrapper">';

		html+='<h1><i class="fa fa-cutlery"></i> RestMang</h1>';
		html+='<span class="hyphen">-</span>';
		html+='<span class="desc">A Restaurant Management app</span>';
		html+='</div>';

		return html;
	}
});