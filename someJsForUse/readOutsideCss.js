//javascript 读取内联之外的css样式
//
//解决方案：引入currentStyle,runtimeStyle,getComputedStyle
//style 标准的样式！可能是由style属性指定的！
//runtimeStyle 运行时的样式！如果与style的属性重叠，将覆盖style的属性！
//currentStyle 指 style 和 runtimeStyle 的结合！
//通过currentStyle就可以获取到通过内联或外部引用的CSS样式的值了（仅限IE）
//如：document.getElementById("test").currentStyle.top
//要兼容FF，就得需要getComputedStyle 出马了
//注意:getComputedStyle是firefox中的，
//currentStyle是ie中的. 
function readOutsideCss(id,cssProperty)
{
	var property;
	if(id.currentStyle)
	{
		property=id.currentStyle[cssProperty];   //For IE
	}
	else
	{
		property=window.getComputedStyle(id,null)[cssProperty];  //For Firefox
	}
	return property;
}