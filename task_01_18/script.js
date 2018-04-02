window.onload=function(){
	var queue=[1,2,3,4];
	// 初始化输入框内的数字
	function initialInput(){
		var input=document.getElementById('input');
		input.value="";
	}
	//正则表达式判断输入的是否为数字
	function test(_input){
		var fig=_input.value;
		var reg=/\d/g;
		if(!reg.test(fig)){
			alert("请输入数字");
		}
	}
	// 获得输入框内数字，生成队列
	function getValue(event,input){
		if(event.target.id=="left_insert"){
			queue.unshift(input.value);
			console.log(queue);
		}
		else if(event.target.id=="right_insert"){
			queue.push(input.value);
			console.log(queue);
		}
		else if(event.target.id=="left_delete"){
			queue.shift();
			console.log(queue);
		}
		else if(event.target.id=="right_delete"){
			queue.pop();
			console.log(queue);
		}
	}
	//绑定button事件
	function buttonClick(){
		var btn=document.getElementsByTagName('button');
		for (var i = 0; i != btn.length; i++) {
		    btn[i].addEventListener('click',function(event){
		    	var input=document.getElementById('input');
				getValue(event,input);
				generator();
		    })
		}
	}
	buttonClick();
	//根据队列生成图表
	function generator(){
		//每次生成前都清空
		var wrap=document.getElementById('queue-wrap');
		wrap.innerHTML="";
		//开始生成图表
		for(var i=0;i!=queue.length;i++){
			var box=document.createElement('div');
			box.innerText=queue[i];
			render(box);
			wrap.appendChild(box);
		}
	}
	//渲染图表
	function render(box){
		box.style.display="inline-flex";
		box.style.justifyContent="center";
		box.style.alignItems="center";
		box.style.backgroundColor="red";
		box.style.height="20px";
		box.style.margin="10px";
		box.style.padding="10px";
		box.style.color="#FFFFFF";	
	}
}