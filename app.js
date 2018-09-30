Ext.onReady(function(){
	// 6강 컴포넌트 속성 설정 및 listeners 이벤트 보는 법
	Ext.create("Ext.panel.Panel",{
		width : 500,
		height : 500,
		title : '6강 ExtJS 타이틀',
		renderTo : Ext.getBody(),
		layout : 'border',
		items : [{
			xtype : 'panel',
			border : true,
			flex : 1,
			region : 'west'
		},{
			xtype : 'panel',
			border : true,
			flex : 2,
			region : 'center',
			layout : 'border',
			items : [{
				xtype : 'panel',
				flex : 2,
				border : true,
				region : 'center'
			},{
				xtype : 'panel',
				flex : 1,
				border : true,
				region : south
			}]
		}]
	})
	//layout : 'fit', 'border'
	//layout2 : 'center', 'absolute', 'accordion', 'card', 'hbox/vbox'
/*	Ext.create("Ext.container.Viewport",{
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
*/
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

