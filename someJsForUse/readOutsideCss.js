//javascript ��ȡ����֮���css��ʽ
//
//�������������currentStyle,runtimeStyle,getComputedStyle
//style ��׼����ʽ����������style����ָ���ģ�
//runtimeStyle ����ʱ����ʽ�������style�������ص���������style�����ԣ�
//currentStyle ָ style �� runtimeStyle �Ľ�ϣ�
//ͨ��currentStyle�Ϳ��Ի�ȡ��ͨ���������ⲿ���õ�CSS��ʽ��ֵ�ˣ�����IE��
//�磺document.getElementById("test").currentStyle.top
//Ҫ����FF���͵���ҪgetComputedStyle ������
//ע��:getComputedStyle��firefox�еģ�
//currentStyle��ie�е�. 
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