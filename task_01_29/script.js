/*
如示例图中所示，在页面中实现一个输入框与按钮，要求点击验证按钮后，对输入框中内容进行格式校验，并在其下方显示校验结果
校验规则：
1.字符数为4~16位
2.每个英文字母、数字、英文符号长度为1
3.每个汉字，中文符号长度为2
*/
window.onload=function(){
	//设置验证函数
	function test(value){
		var reg=/[\w\u4E00-\u9FA5]{4,16}/g;
		if(value==''){
			return "empty"
		}
		else if(reg.test(value)){
			return true;
		}
		else{
			return false;
		}
	} 
	//验证结果的提示函数
	function alertMes(res){
		var p=document.getElementById('p');
		var input=document.getElementById('input');
		if(res=="empty"){
			p.innerHTML="姓名不能为空";
			p.style.color="#F61212";
			input.style.border="0.5px solid #F61212";
		}
		else if(res==false){
			p.innerHTML="格式不正确";
			p.style.color="#F61212";
			input.style.border="0.5px solid #F61212";
		}
		else if(res==true){
			p.innerHTML="名称格式正确";
			p.style.color="#59D83E";
			input.style.border="0.5px solid #59D83E";
		}
	}
	//绑定验证事件
	function typeIn(){
		var btn=document.getElementById("btn");
		btn.addEventListener('click',function(event){
			if(event){
				var name=document.getElementById('input').value;
				var res=test(name);
				console.log("OK");
				alertMes(res);
			}
		})
	}
	typeIn();
}	