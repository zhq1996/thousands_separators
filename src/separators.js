'use strict';
function thousands_separators(num) {
    var num = num.toString();
    var str=[];
    var panduan;
    var result;

    panduan = num.indexOf(".");
    if (panduan===-1) {
        str.push(num);
    } else {
        str=num.split(".");
    }
    if (str[0].length<= 3) {
        result=str[0];
    } else {
        var weizhi=str[0].length % 3;
        result=str[0].slice(0, weizhi)+',';
        while (str[0].length - weizhi>3) {
            result+=str[0].slice(weizhi, weizhi + 3) + ',';
            weizhi+=3;
        }
        result+=str[0].slice(weizhi);
    }
    if (str.length > 1) {
        result+='.';
        result+=str[1];
    }

    return result;
}
module.exports = thousands_separators;
