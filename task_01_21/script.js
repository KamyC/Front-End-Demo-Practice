/*
~基于任务20，将任务20的代码进行抽象、封装，然后在此基础上实现如图中的两个需求：Tag输入和兴趣爱好输入
~如示例图上方，实现一个tag输入框
~要求遇到用户输入空格，逗号，回车时，都自动把当前输入的内容作为一个tag放在输入框下面。
~Tag不能有重复的，遇到重复输入的Tag，自动忽视。
~每个Tag请做trim处理
~最多允许10个Tag，多于10个时，按照录入的先后顺序，把最前面的删掉
~当鼠标悬停在tag上时，tag前增加删除二字，点击tag可删除

~如示例图下方，实现一个兴趣爱好输入的功能
~通过一个Textarea进行兴趣爱好的输入，可以通过用回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号作为间隔。
~当点击“确认兴趣爱好”的按钮时，将textarea中的输入按照你设定的间隔符，拆解成一个个的爱好，显示在textarea下方
~爱好不能重复，所以在下方呈现前，需要做一个去重
~每个爱好内容需要做trim处理
~最多允许10个兴趣爱好，多于10个时，按照录入的先后顺序，把最前面的删掉
*/
window.onload=function(){
	var arr=[];
	var arrText=[]
//事件监听，获得tag文本内容
	function getTagValue(){
		var tag=document.getElementById('input');
		tag.addEventListener('keydown',function(event){
			var tag=document.getElementById('input');
			if(event.keyCode==13||event.keyCode==188||event.keyCode==32){
				tag.value=myTrim(tag.value);
				if(!checkRepeat(tag)&&arr.length<=10){
					arr.push(tag.value);
					if(arr.length>10){
						arr.shift();
					}
					console.log(arr);
					generator();
					tag.value='';//清空
				}
			}
		})
	}
	getTagValue();
//检测是否有相同标签
	function checkRepeat(tag){
		for(var i=0;i!=arr.length;i++){
			if(arr[i]===tag.value){
				return true;
			}
		}
	}
//trim处理函数
	function myTrim(str){
	  var reg=/\s*/g;
	  return str.replace(reg,"")
	}
//根据队列生成图表
	function generator(){
		//每次生成前都清空
		var wrap=document.getElementById('tags-wrap');
		wrap.innerHTML="";
		//开始生成图表
		for(var i=0;i!=arr.length;i++){
			var box=document.createElement('div');
			box.innerText=arr[i];
			render(box);
			wrap.appendChild(box);
		}
		hangOver();
	}
//渲染图表
	function render(box){
		box.style.display="inline-flex";
		box.style.justifyContent="center";
		box.style.alignItems="center";
		box.style.backgroundColor="#879EF8";
		box.style.margin="10px";
		box.style.padding="2px";
		box.style.color="#FFFFFF";	
	}
//光标悬停效果
	function hangOver(){
		var boxes=document.getElementById('tags-wrap').getElementsByTagName('div');
		for(var i=0;i!=boxes.length;i++){
			boxes[i].addEventListener('mouseenter',function(){
				event.target.innerHTML="点击删除 "+event.target.innerHTML;
				event.target.style.backgroundColor="red";
			})
			boxes[i].addEventListener('mouseout',function(){
				event.target.innerHTML=event.target.innerHTML.substring(4);
				event.target.style.backgroundColor="#879EF8";
			})
		}
		clickDel();	
	}
//点击删除效果
	function clickDel(){
		var boxes=document.getElementById('tags-wrap').getElementsByTagName('div');
		for(var i=0;i!=boxes.length;i++){
			boxes[i].addEventListener('click',function(){
				console.log(i)
				arr.splice(i-1,1);
				console.log(arr);
				generator();
			})
		}
	}


//第二部分
//处理text文本内容
	function process(_input){
		var result=[];
		var content=_input.value;
		var reg=/[^a-zA-Z0-9]+/g;
		var content=content.replace(reg," ");
		result=content.split(' ');
		return result;
	}
//去重
	function delRepeat(arrText){
		var len=arrText.length;
		for(var i = 0; i < len; i++){
			for(var j = i + 1; j < len; j++){
				if(arrText[i] == arrText[j]){
				    arrText.splice(j,1);
				    len--;
				    j--;
				}
			}
		}
	}
//事件监听，获得text文本内容
	function getTextValue(){
		var btn=document.getElementById('btn');
		btn.addEventListener('click',function(event){
			var text=document.getElementById('text');
				text.value=myTrim(text.value);
				var toAdd=process(text);
				arrText=arrText.concat(toAdd);
				//去重和判断不能超过10个
				delRepeat(arrText)
				while(arrText.length>10){
					arrText.shift();
				}
				console.log(arrText);
				generatorForText();
				text.value='';//清空
		})
	}
	getTextValue()
//根据队列生成图表
	function generatorForText(){
		//每次生成前都清空
		var text_wrap=document.getElementById('text-wrap');
		text_wrap.innerHTML="";
		//开始生成图表
		for(var i=0;i!=arrText.length;i++){
			var box=document.createElement('div');
			box.innerText=arrText[i];
			render(box);
			text_wrap.appendChild(box);
		}
		hangOver_2();
	}
//光标悬停效果
	function hangOver_2(){
		var boxes=document.getElementById('text-wrap').getElementsByTagName('div');
		for(var i=0;i!=boxes.length;i++){
			boxes[i].addEventListener('mouseenter',function(){
				event.target.innerHTML="点击删除 "+event.target.innerHTML;
				event.target.style.backgroundColor="red";
			})
			boxes[i].addEventListener('mouseout',function(){
				event.target.innerHTML=event.target.innerHTML.substring(4);
				event.target.style.backgroundColor="#879EF8";
			})
		}
		clickDel_2();	
	}
//点击删除效果
	function clickDel_2(){
		var boxes=document.getElementById('text-wrap').getElementsByTagName('div');
		for(var i=0;i!=boxes.length;i++){
			boxes[i].addEventListener('click',function(){
				// console.log(i)
				arrText.splice(i-1,1);
				// console.log(arrText);
				generatorForText();
			})
		}
	}	
}