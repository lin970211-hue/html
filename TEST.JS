// I am a Comment. I do Nothing
let x = 5;  // 宣告變數 x 並賦值為 5
const y = 6;  // 宣告常數 y 並賦值為 6
// y = 10;  // 這行會出現錯誤，因為 y 是常數，不能被重新賦值

// How to Compute values
let z = x + y;  // 變數 z 儲存 x 和 y 相加的結果，這裡 z = 5 + 6，結果為 11

// How to Output values
console.log(z);  // 輸出變數 z 的值，應該是 11

// How to Define Functions
function add(a, b) {  // 定義一個函數 add，接受兩個參數 a 和 b
  return a + b;  // 返回 a 和 b 的和
}

function multiply(a, b) {  // 定義一個函數 multiply，接受兩個參數 a 和 b
  return a * b;  // 返回 a 和 b 的積
}

z = add(40, 20);  // 調用 add 函數並將結果賦值給 z，這裡 z = 40 + 20，結果是 60

console.log(z);  // 輸出 z 的值，應該是 60
console.log(add(400, 200));  // 輸出 add(400, 200) 的結果，應該是 600
console.log(multiply(400, 200));  // 輸出 multiply(400, 200) 的結果，應該是 80000
alert('hello world');
//建立自訂函式

function hello(){      
    alert('hello world');
}
function hello2(name){  
    let n = prompt("請輸入暱稱");
    alert('hello, '+name+'你的暱稱是'+n);
}
function sum(x,y){
    let s = x + y;
    return s;
}
console.log(sum(4,5));
const btn1 = document.getElementById("btn1");  //取得ID
const btn2 = document.getElementById("btn2");  //取得ID
const btn3 = document.getElementById("btn3");  //取得ID
const btn4 = document.getElementById("btn4");  //取得ID
const img = document.getElementById("img");  //取得ID


btn1.addEventListener("click",function(){  //監聽事件，點擊，執行函式
    document.getElementById("demo1").innerHTML = "Hello JavaScript";
})
btn2.addEventListener("click",function(){  //監聽事件，點擊，執行函式
x = x + 10;
document.getElementById("demo2").style.fontSize=x + "px";
})
btn3.addEventListener("click",function(){  //監聽事件，點擊，執行函式
    alert("沒事");
    this.innerText = "沒事";
    this.style.color = "red";
})
btn4.addEventListener("click",function(){  //監聽事件，點擊，執行函式
    y = (y=="none")? "block" : "none";
    document.getElementById("demo1").style.display = y;
    document.getElementById("demo2").style.display = y;
})
img.addEventListener("mouseover",function(){  //監聽事件，滑鼠懸浮上面
    this.src = "pic2.jpg";
})
img.addEventListener("mouseout",function(){  //監聽事件，滑鼠懸浮離開
    this.src = "pic1.jpg";
})

