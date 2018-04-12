/*
~如示例图中所示，在页面中完成两个单选框，切换单选框的不同选项时下方显示的表单随之切换。
~当选择在校生时，出现两个select下拉菜单，一个选择城市，一个选择学校，
 当选择非在校生时，出一个文本输入框.
~学校下拉菜单里的学校名单均为城市下拉菜单中所选的城市中的大学，
 当城市发生变化时，学校一起发生变化.
~城市及学校的数据随意编造即可，无需真实完整.
*/	
window.onload=function(){
	//在校和非在校的切换
	function toggleRole(){
		var school=document.getElementById('school');
		var schoolAdd=document.getElementById('schoolAdd')
		var social=document.getElementById('social');
		var socialAdd=document.getElementById('socialAdd');
		var radios=document.getElementById('radios');
		radios.addEventListener('click',function(){
			if(school.checked){
				schoolAdd.style.display="block";
				toggleSchool()
			}
			else{
				schoolAdd.style.display="none";
			}
		})
		radios.addEventListener('click',function(){
			if(social.checked){
				socialAdd.style.display="block";
			}
			else{
				socialAdd.style.display="none";
			}
		})
	}
	toggleRole();
	//不同地址下，学校的切换
	var Beijing=["北京大学","北京大学","北京大学","北京大学"];
	var Shanghai=["上海大学","上海大学","上海大学","上海大学"];
	var Guangzhou=["广州大学","广州大学","广州大学","广州大学"];
	var Shenzhen=["深圳大学","深圳大学","深圳大学","深圳大学"];

	function toggleSchool(){
		var school=document.getElementById('school');
		var location=document.getElementById('location');
		var options=location.getElementsByTagName('option');
		if(school.checked){
			location.addEventListener('click',function(){
				var index=location.selectedIndex;
				var uni=document.getElementById('uni');
				if(index==0){
					uni.options.length=0;	//先初始化，清空所有学校信息
					for(var i=0;i!=Beijing.length;i++){
						var newOption=new Option(Beijing[i],i)
						uni.options.add(newOption);
					}
				}
				else if(index==1){
					uni.options.length=0;	//先初始化，清空所有学校信息
					for(var i=0;i!=Shanghai.length;i++){
						var newOption=new Option(Shanghai[i],i)
						uni.options.add(newOption);
					}
				}
				else if(index==2){
					uni.options.length=0;	//先初始化，清空所有学校信息
					for(var i=0;i!=Guangzhou.length;i++){
						var newOption=new Option(Guangzhou[i],i)
						uni.options.add(newOption);
					}
				}
				else if(index==3){
					uni.options.length=0;	//先初始化，清空所有学校信息
					for(var i=0;i!=Shenzhen.length;i++){
						var newOption=new Option(Shenzhen[i],i)
						uni.options.add(newOption);
					}
				}
			})
		}
	}
}
