Ext.define('ClassicApp.main.Header',{
	extend : 'Ext.Container',
	alias  : 'widget.app-header',
	cls    : 'app-header',
	items  : [{
		xtype  : 'component',
		html   : '<h1><i class="fa fa-cutlery"></i> RestMang</h1>'
	}]
});