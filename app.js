Ext.onReady(function(){
	Ext.create("Ext.panel.Panel",{
		width : 300,
		height : 300,
		renderTo : Ext.getBody(),
		border : true,
		items: [{
			xtype : 'textfield'
		},{
			xtype : 'button',
			text : '버튼'
		}]
	})
})

