Ext.onReady(function(){
	Ext.create("Ext.container.Viewport",{
		renderTo : Ext.getBody(),
		layout : 'border',
		border : true,
		items: [
			{
				xtype : 'panel',
				border : true,
				flex : 1,
				region : 'north',
				layout : 'border',
				items :
				[
					{
						xtype : 'panel',
						border : true,
						flex : 1,
						region : 'center'
					},
					{
						xtype : 'panel',
						border : true,
						flex : 1,
						region : 'east'
					}
				]
			},
			{
				xtype : 'panel',
				border : true,
				flex : 1,
				region : 'center',
			}
		]
	});
});

