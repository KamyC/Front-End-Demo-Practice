/*
基于任务18进行升级
	1. 将新元素输入框从input改为textarea
	2. 允许一次批量输入多个内容，格式可以为数字、中文、英文等，可以通过用回车，
	   逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号作为不同内容的间隔
	3. 增加一个查询文本输入框，和一个查询按钮，当点击查询时，将查询词在各个元素内容中做模糊匹配，
	   将匹配到的内容进行特殊标识，如文字颜色等。举例，内容中有abcd，查询词为ab或bc，则该内容需要标识
*/
window.onload=function(){
	var queue=["121","112233","12333444"];
	// 初始化输入框内的数字
	function initialInput(){
		var input=document.getElementById('input');
		input.value="";
	}
	//处理textarea内的字符串
	function process(_input){
		var result=[];
		var text=_input.value;
		var reg=/[^a-zA-Z0-9]+/g;
		var text=text.replace(reg," ");
		result=text.split(' ');
		return result;
	}
	// 获得输入框内数字，生成队列
	function getValue(event,input){
		var final=process(input);
		if(event.target.id=="left_insert"){
			for(var i=final.length-1;i>=0;i--){
				queue.unshift(final[i]);
				console.log(queue);
			}
		}
		else if(event.target.id=="right_insert"){
			for(var i=0;i!=final.length;i++){
				queue.push(final[i]);
				console.log(queue);
			}
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
	//通过点击，获得查询文本框的内容
	function search(){
		//先绑定button
		var searchBtn=document.getElementById('searchBtn');
		var search=document.getElementById('search');
		//获得所有的box
		var boxes=document.getElementById('queue-wrap').getElementsByTagName('div');
		searchBtn.onclick=function(){
			console.log(boxes.length)
			var key=search.value;
			var reg=new RegExp(key,"ig");
			var keyHigh="<font style='color:#5A0AFA;'>"+key+"</font>"
			for(var i=0;i!=boxes.length;i++){
				boxes[i].innerHTML=boxes[i].innerHTML.replace(reg,keyHigh);
			}
			console.log(queue);
		}
	}
	search()
}