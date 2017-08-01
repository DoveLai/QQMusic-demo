var sum = 0 ;
for(var i = 1; i <= 100; i ++) {
    sum +=i;
}
console.log(sum); //1到100连加；

for(var i = 1; i <= 2017; i ++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}
//1 到2017奇数打印出来；

for (var i = 1; i<= 2017; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
    }
}
//打印1 到2017能被3同时被5整除的数；

for (var i = 1; i <= 2017; i ++) {
    if (i % 2 == 0 ) {
        console.log(i);
        i += 2;
        continue;
    }    else if (i % 3 == 0) {
        console.log(i);
        i += 3;
        continue;
    }    
}

//1到2017 输出一个偶数后跳过2个数，输出被3整除的数后跳过3个数；

var a = [9,6,5,7,8];
var max = 0;
for (var i = 0; i< a.length; i ++) {
    if (a[i] >= max) { 
        max = a[i];
        console.log(max);
    }
}

for (var i = 0; i< a.length; i ++) {
    for (var j = i + 1 ; j < a.length; j ++) {
        if (a[j] < a[i]) {
            max = a[i];
            a[i] = a[j];
            a[j] = max;             
        }
    }
}

//[9,6,5,7,8] 排序

var a = [2,5,7,8,9,10,33,44,66,33,77,86,23,25,34,4]
for (var i = 0; i< a.length; i ++) {
    for (var j = i + 1; j < a.length; j ++) {
        if (a[i] + a[j] == 70) {
            console.log(a[i], a[j]);
        }
    }
}
//从数组[2,5,7,8,9,10,33,44,66,33,77,86,23,25,34,4]中找到两个值之和=70，打印出这2数 

//hw:数组有哪些函数,哪些方法(比如push),语法，参数，返回值


//shift, unshift,reverse, forEach,map 例子

/*charAt
  substr
  substring
  indexOf
  lastIndexOf
  length
  
*/
//一个函数  calc (1, '+' , 5); calc(2, '*', 6);
//function getSubStr(str, 1(起始), 4（个数));
function calc(first, operate, second) {
    if (isNaN(first || second)) {
        console.log("Please input correct number")
    }
    else {
        switch (operate) {
            case "+": return (first + second);
            case "-": return (first - second);
            case "*": return (first * second);
            case "/": return (first / second);
        }
    }
} 

function getSubStr(str, start, num) {
    if (str && str.length  ) 
    
    
    {
        return str.slice(start,start + num);
    }
}

var s = 2;
function t() {
    var a = 3;
    var c = {
        d: 1,
        e: function() {
          console.log(a + s);
        }
    }
    c.e();
}
/*
闭包
函数作用域
*/
function test() {
    var bz = 1;
    
    return function () {
        console.log(bz);
    };
    
    
}
var f = test();
f();
/*原型 原型继承 */

/* ajax
JSON.parse()
JSON.stringify()*/ 

var xhr = new XMLHttpRequest();


xhr.open('GET', 'https://www.baidu.com',true);
xhr.onreadystatechange = function () {
    console.log("ok");
} // 请求



xhr.send('learning.'); //发送数据 
// 原生实现/$.ajax() //jQuery 抓一下baidu，163，腾讯数据

// http://shenzhen.news.163.com
var request = new XMLHttpRequest(); 
request.open('GET', url); 
request.onreadystatechange = function () {
    if (request.readyState == 4) {
        if (request.status == 200) {
            alert(request.responseXML);
        }
        else {
            alert("Problem retrieving data:" + request.statusText);
        }
    } 
}
request.send(null);
//
setInterval(function() {$('#status').load("status_report.html");}, 6000);
 // $.ajax is not a function

(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
        // Use $ here...
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();
//
$.ajax({
    type: 'GET',
    url: 'http://shenzhen.news.163.com' ,
    data: null ,
    success: callback,
    error: function() {
      alert("error");
    },
    dataType: 'json'
});


//
$(function(){  
    $('#send').click(function(){  
         $.ajax({  
             type: "GET",  
             url: "http://shenzhen.news.163.com",  
             data: null,  
             dataType: "json",  
             success: function(){  
                         alert('ok');
                      },
             error : function(XMLHttpRequest, textStatus, errorThrown){ 
               alert(textStatus); }   
         });  
    });  
})
// 跨域 域名 协议 端口
/*  
   1、iframe 指向对方 子窗口通信
   2、jsonp 通过<script>方式
   3、document.domain 跨子域
   4、postmessage()
   5、cors
*/
// http 协议 ​​​​​​状态码 100 200 300 400 500
/*1	1xx消息
2	2xx成功
3	3xx重定向
4	4xx客户端错误
5	5xx服务器错误
 */

/*
git init
git status
git add

*/