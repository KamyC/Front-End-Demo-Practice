window.onload=function(){
	var arr=[];
	//随机生成10-100之间的数字，并存入数组
	function ranGenerator(){
		for(var i=0;i!=20;i++){
			arr.push(Math.floor(Math.random()*90)+10);
		}
	}
	function render(bar){
		bar.style.width="20px";
		bar.style.display="inline-block";
		bar.style.margin="0px 5px";
		bar.style.backgroundColor="#F41515";
	}
	//将该数组初始化成图形
	function initialBar(){
		var wrap=document.getElementById('bar-wrap');
		for(var i=0;i!=arr.length;i++){
			var bar=document.createElement('div');
			var h=arr[i];
			bar.name="bar";
			bar.style.height=h+"px";
			render(bar);
			wrap.appendChild(bar);
		}
	}
	
	//排序算法 冒泡排序 参考用
	// function bubbleSort(){
	// 	for(var i=0;i!=arr.length;i++){
	// 		for(var j=i+1;j!=arr.length;j++){
	// 			if(arr[j]<arr[i]){
	// 				var temp;
	// 				temp=arr[j];
	// 				arr[j]=arr[i];
	// 				arr[i]=temp;
	// 			}
	// 		}
	// 	}
	// }

	//可视化排序算法
	function visualSort(){
		var bars=document.getElementById('bar-wrap').getElementsByTagName("div");
		var btn=document.getElementById('button');
		var i=0;
		var j=1;
		btn.addEventListener('click', function(){
			var temp;
			var temp_2;
			if(arr[j]<arr[i]){
				//改变数组的同时，
				temp=arr[j];
				arr[j]=arr[i];
				arr[i]=temp;
				//改变图形。
				temp_2=bars[j].style.height;
				bars[j].style.height=bars[i].style.height;
				bars[i].style.height=temp_2;
			}
			j++;
			if(j==arr.length){
				i++;
				j=i+1;
				console.log('round done');
			}
			if(i==arr.length){
				j=i;
			}
		})
	}
	ranGenerator();
	console.log(arr);
	initialBar();
	visualSort();
	//模拟点击
	function click(){
		var btn=document.getElementById('button');
		btn.click();
	}
	var t=setInterval(click,100);
}