function click_number(key) {
    var text = document.getElementById('display').innerText;
    var signs="+-*/%";
    var last = text.charAt(text.length - 1);// 获得文本框中的最后一个元素
    if(signs.indexOf(last)!=-1 && signs.indexOf(key)!=-1){//运算符后再输入运算符
        text =text+"";
    }
    else if(text=="0" && signs.indexOf(key)!=-1){//零状态时输入运算符
        text =text+ "";
    }
    else{//正常输入
        text=(text!="0") ? text : ""; //如果当前值不是"0"，则返回当前值，否则返回空值;
        text =text+ key;
    }
    document.getElementById('display').innerText = text; //将最后结果返回给文本框
}
function click_point(){
    var key=".";
    var text = document.getElementById('display').innerText;
    var signs="+-*/%.";
    var last = text.charAt(text.length - 1);// 获得文本框中的最后一个元素
    if(signs.indexOf(last)!=-1){//运算符或小数点后输入小数点
        key="";
    }
    document.getElementById('display').innerText=text+key;
}
function calculation_result(){
    var text=document.getElementById('display').innerText;
    var result=eval(text);
    document.getElementById('display').innerText =result;
}
function delete_key(){ //退格
    var str=String(document.getElementById('display').innerText);
    str=(str!="0") ? str : "";
    str=str.substr(0,str.length-1);
    str=(str!="") ? str : "0";
    document.getElementById('display').innerText=str;
}
function clear_display(){ //清空提示
    document.getElementById('display').innerText="0";
}
