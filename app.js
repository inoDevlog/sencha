Ext.onReady(function(){
	//layout : 'fit', 'border'
	//layout2 : 'center', 'absolute', 'accordion', 'card', 'hbox/vbox'
	Ext.create("Ext.container.Viewport",{
		layout : 'fit', // 웹페이지의 전부를 가득 채운다.
		border : true,
		items : [{
			xtype : 'panel',
			title : '부모패널',
			layout : 'vbox',
			items : [{
				xtype : 'button',
				text : '등록'
			},{
				xtype : 'button',
				text : '삭제'
			}]
		}]
	})

/*		layout : "fit",
		border : true,
		items :
		[
		 	{
		 		xtype : 'panel',
		 		title : '부모패널',
		 		layout : "accordion",
		 		items :
		 		[
		 		 	{
		 		 		xtype : 'panel',
		 		 		width : 300,
		 		 		height : 300,
		 		 		x : 100,
		 		 		y : 200,
		 		 		border : true,
		 		 		title : '첫째 패널'

		 		 	},
		 		 	{
		 		 		xtype : 'panel',
		 		 		x : 150,
		 		 		y : 300,
		 		 		width : 300,
		 		 		height : 300,
		 		 		border : true,
		 		 		title : '둘째 패널'
		 		 	}
		 		]
		 	}
		]
	})*/
	//layout : 'fit, 'border'
/*	Ext.create("Ext.container.Viewport",{
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
	});*/
});

