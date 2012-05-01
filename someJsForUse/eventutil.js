var EventUtil={
	addHandler:function(element,type,handler)          //添加监听器
	{
		if(element.addEventListener)
		{
			element.addEventListener(type,handler,false);
		}
		else if(element.attachEvent)
		{
			element.attachEvent("on"+type,handler);
		}
		else
		{
			element["on"+type]=handler;
		}
	},
	getEvent:function(event)    //返回event对象，用来使用接下来的getTarget(),preventDefault(),stopPropagation()方法
	{
		return event?event:window.event;
	},
	getTarget:function(event)    //返回事件的目标
	{
		return event.target||event.srcElement;
	},
	preventDefault:function(event)    //取消事件的默认行为
	{
		if(event.preventDefault)
		{
			event.preventDefault();
		}
		else
		{
			event.returnValue=false;
		}
	},
	removeHandler:function(element,type,handler)    //删除监听器
	{
		if(element.removeEventListener)
		{
			element.removeEventListener(type,handler,false);
		}
		else if(element.detachEvent)
		{
			element.detachEvent("on"+type,handler);
		}
		else
		{
			element["on"+type]=null;
		}
	},
	stopPropagation:function(event)   //阻止事件流
	{
		if(event.stopPropagation)
		{
			event.stopPropagation();
		}
		else
		{
			event.cancelBubble=true;
		}
	}
}