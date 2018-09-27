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
				region : 'north', // north center south east west
				layout : 'border',
				items :
				[
					{
						xtype : 'panel',
						border : true,
						flex : 1,
						region : 'west'
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

