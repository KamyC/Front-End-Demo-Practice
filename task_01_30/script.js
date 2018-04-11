/*
如示例图中所示，基于上一个任务（任务29），在页面中添加多个表单
表单获得焦点时，下方显示表单填写规则
表单失去焦点时校验表单内容
校验结果正确时，表单边框显示绿色，并在下方显示验证通过的描述文字
校验结果错误时，表单边框显示红色，并在下方显示验证错误的描述文字
点击提交按钮时，对页面中所有输入进行校验，校验结果显示方式同上。若所有表单校验通过，
弹窗显示“提交成功”，否则显示“提交失败”
*/
window.onload=function(){
	//验证名称
	function testName(value,pName){
		var reg=/[\w\u4E00-\u9FA5]{4,16}/g;
		if(value==''){
			pName.innerHTML="名称不能为空";
			pName.style.color="#F01D1D";
		}
		else if(reg.test(value)){
			pName.innerHTML="格式正确";
			pName.style.color="#29BE43";
		}
		else{
			pName.innerHTML="格式不正确";
			pName.style.color="#F01D1D";
		}
	}
	//验证密码
	function testPass(value,pPass){
		var regPass=/[\w\u4E00-\u9FA5]{7,12}/g;
		if(value==""){
			pPass.innerHTML="名称不能为空";
			pPass.style.color="#F01D1D";
		}
		else if(regPass.test(value)){
			pPass.innerHTML="格式正确";
			pPass.style.color="#29BE43";
		}
		else{
			pPass.innerHTML="格式不正确";
			pPass.style.color="#F01D1D";
		}
	}
	//验证邮箱
	function testEmail(value,pEmail){
		var regEmail=/^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/g;
		if(value==""){
			pEmail.innerHTML="邮箱不能为空";
			pEmail.style.color="#F01D1D";
		}
		else if(regEmail.test(value)){
			pEmail.innerHTML="格式正确";
			pEmail.style.color="#29BE43";
		}
		else{
			pEmail.innerHTML="格式不正确";
			pEmail.style.color="#F01D1D";
		}
	}
	//验证手机
	function testPhone(value,pPhone){
		var regPhone=/\d{11,11}/g;
		if(value==""){
			pPhone.innerHTML="手机号码不能为空";
			pPhone.style.color="#F01D1D";
		}
		else if(regPhone.test(value)){
			pPhone.innerHTML="格式正确";
			pPhone.style.color="#29BE43";
		}
		else{
			pPhone.innerHTML="格式不正确";
			pPhone.style.color="#F01D1D";
		}
	}
	//焦点获得时候出现规则
	function showRule(){
		var name=document.getElementById('name');
		var pName=name.nextSibling.nextSibling;
		name.addEventListener('focus',function(event){
			console.log('focus');
			pName.innerHTML="必填，长度为4-16个字符";
		})
		name.addEventListener('blur',function(event){
			var value=event.target.value;
			testName(value,pName);
		})

		var password=document.getElementById('password');
		var pPass=password.nextSibling.nextSibling;
		password.addEventListener('focus',function(event){
			console.log('focus');
			pPass.innerHTML="必填，长度为7-12个字符"
		})
		password.addEventListener('blur',function(event){
			var value=event.target.value;
			testPass(value,pPass);
		})

		var passConfirm=document.getElementById('passConfirm');
		var pConfirm=passConfirm.nextSibling.nextSibling;
		passConfirm.addEventListener('focus',function(event){
			console.log('focus');
			passConfirm.innerHTML="必填，确认密码";
		})
		passConfirm.addEventListener('blur',function(event){
			var value=event.target.value;
			if(pPass.innerHTML=="格式正确"){
				if(value==""){
					pConfirm.innerHTML="不能为空";
					pConfirm.style.color="#F01D1D";
				}
				else if(value==password.value){
					pConfirm.innerHTML="格式正确";
					pConfirm.style.color="#29BE43"
				}
				else{
					pConfirm.innerHTML="请确认一致";
					pConfirm.style.color="#F01D1D";
				}
			}
			else{
				pConfirm.innerHTML="格式不正确";
				pConfirm.style.color="#F01D1D";
			}
			
		})
		var email=document.getElementById('email');
		var pEmail=email.nextSibling.nextSibling;
		email.addEventListener('focus',function(event){
			console.log('focus');
			pEmail.innerHTML="必填，请输入正确邮箱地址";
		})
		email.addEventListener('blur',function(event){
			console.log('blur');
			var value=event.target.value;
			testEmail(value,pEmail);
		})

		var phone=document.getElementById('phone');
		var pPhone=phone.nextSibling.nextSibling;
		phone.addEventListener('focus',function(event){
			console.log('focus');
			pPhone.innerHTML="必填，请输入正确手机号";
		})
		phone.addEventListener('blur',function(event){
			console.log('blur');
			var value=event.target.value;
			testPhone(value,pPhone);
		})
	}

	showRule();
	//绑定提交按钮
	function submit(){
		var btn=document.getElementById('btn');
		btn.addEventListener('click',function(event){
			console.log('submit');
			var p=document.getElementsByTagName('p');

			var count=0;
			for(var i=0;i!=p.length;i++){
				if(p[i].style.color=="rgb(240, 29, 29)"){
					alert('Error');
				}
				else{
					count++;
				}
			}
			if(count==5){
				alert('Submitted');
			}
		})
	}
	submit();
}	