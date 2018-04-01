/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/
window.onload=function(){
// 以下两个函数用于随机模拟生成测试数据
  function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
  }
  function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = ''
    for (var i = 1; i < 92; i++) {
      datStr = getDateStr(dat);
      returnData[datStr] = Math.ceil(Math.random() * seed);
      dat.setDate(dat.getDate() + 1);
    }
    return returnData;
  }

  var aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
  };
  // 用于渲染图表的数据
  var chartData = {};

  // 记录当前页面的表单选项
  var pageState = {
    nowSelectCity: -1,
    nowGraTime: "day"
  }

chartData=aqiSourceData["北京"];
 /**
   * 处理不同高度的颜色变化
   */
  function getColor(h_num,bar,avg){
    var test=(h_num-avg)/avg;
    if(test>0.2){
      bar.style.backgroundColor="#000000";
    }
    else if(test<=0.2&&test>0.1){
      bar.style.backgroundColor="#7b037e";
    }
    else if(test<=0.1&&test>-0.1){
      bar.style.backgroundColor="#e90c04";
    }
    else if(test<=-0.1&&test>-0.2){
      bar.style.backgroundColor="#0201ff";
    }
    else{
      bar.style.backgroundColor="#007b0e";
    }
  }  
  /**
   * 日、周、月的radio事件点击时的处理函数
   */
  function graTimeChange() {
    // 确定是否选项发生了变化 
    var btns=document.getElementById('form-gra-time');
    var wrap=document.getElementById("aqi-chart-wrap");
    wrap.innerHTML="";
    // 求平均值
    var sum=0;
    for(var key in chartData){
      sum+=chartData[key];
    }
    var avg=sum/91;
    // 判断
    if(btns.childNodes[3].childNodes[1].checked==true&&btns.childNodes[3].childNodes[1].value=="day"){
      console.log("days");
      var chart=document.createElement("div");
      chart.id="bars";
      for(key in chartData){
        var bar=document.createElement("div");
        var h_num=chartData[key];
        var h=chartData[key]+"px";

        getColor(h_num,bar,avg);
        bar.style.height=h;
        bar.style.width="10px";
        wrap.appendChild(chart);
        chart.appendChild(bar);
      } 
    } 
    // day ends
    else if(btns.childNodes[5].childNodes[1].checked==true&&btns.childNodes[5].childNodes[1].value=="week"){
      console.log("week");
      var chart=document.createElement("div");
      chart.id="bars";
      var count=0;
      var h_num=0;
      for(var key in chartData){
        count+=1;
        h_num+=chartData[key];
        if(count==7){
          var bar=document.createElement('div');
          h_num/=7;
          var h=h_num+"px";
          getColor(h_num,bar,avg);
          bar.style.height=h;
          bar.style.width="30px";
          wrap.appendChild(chart);
          chart.appendChild(bar);
          count=0;
          h_num=0;
        }
      }
    } 
    // week ends
    else if(btns.childNodes[7].childNodes[1].checked==true&&btns.childNodes[7].childNodes[1].value=="month"){
      console.log('month');
      var chart=document.createElement("div");
      chart.id="bars";
      var count=0;
      var h_num=0;
      for(var key in chartData){
        count+=1;
        h_num+=chartData[key];
        if(count==30){
          var bar=document.createElement('div');
          h_num/=30;
          var h=h_num+"px";
          getColor(h_num,bar,avg);
          bar.style.height=h;
          bar.style.width="30px";
          wrap.appendChild(chart);
          chart.appendChild(bar);
          count=0;
          h_num=0;
        }
      }
    }
    // month ends
  }
  // graTimeChange();
    /**
   * 渲染图表
   */
  function renderChart(){
    var bars=document.getElementById("bars");
    bars.style.display="flex";
    bars.style.justifyContent="center";
    bars.style.alignItems="flex-end";
    bars.style.height="100%";
    var len=bars.childNodes.length;
    for(var i=0;i!=len;i++){
      bars.childNodes[i].style.border="1px solid white";
    }
  }
  /**
   * select发生变化时的处理函数
   */
  function citySelectChange() {
    // 确定是否选项发生了变化 

    // 设置对应数据

    // 调用图表渲染函数
  }

  /**
   * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
   */
  function initGraTimeForm() {
    var btns=document.getElementById('form-gra-time');
    btns.addEventListener('click',function(){
      graTimeChange();
      renderChart();
    })
  }
initGraTimeForm()
  /**
   * 初始化城市Select下拉选择框中的选项
   */
  function initCitySelector() {
    // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
    // 给select设置事件，当选项发生变化时调用函数citySelectChange

  }

  /**
   * 初始化图表需要的数据格式
   */
  function initAqiChartData() {
    // 将原始的源数据处理成图表需要的数据格式
    // 处理好的数据存到 chartData 中
    chartData={};
    
  }

  /**
   * 初始化函数
   */
  function init() {
    initGraTimeForm()
    initCitySelector();
    initAqiChartData();
  }
  // init();
}  