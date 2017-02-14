"use strict";
//阶乘函数
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
//数组去重
function unique3(arr) {
    let res = [];
    let json = {};
    for (let i = 0; i < arr.length; i++) {
        if (!json[arr[i]]) {
            res.push(arr[i]);
            json[arr[i]] = 1;
        }
    }
    return res;
}

//数组->字符串  操作
function toString (arr) {
    let str="";
    for(let i=0;i<arr.length;i++){
        str+=arr[i];
    }
    return str;
}
//字符串->数组  操作
function toArray(str) {
    let arr=[];
    for(let i=0;i<str.length;i++){
        arr.push(str[i]);
    }
    return arr;
}

const a = 'ABCE';


let sult = [];
console.log(a + "\t一共有：" + factorial(a.length) + "种结果.");

let string = [];
console.log("----------------------");
console.log("计算过程：第一步");
string = (function (step) {
    string[0] = step;
    console.log(string[0]);
    return string;
})(a[0], string);
console.log(string);
console.log("----------------------");
console.log("计算过程：第二步");
string = (function (step, string) {
    string[1] = string[0];
    string[0] = string[0];

    string[0]= toString(string[0]).concat(step);
    console.log(string[0]);
    string[1] = step + string[1];
    console.log(string[1]);
    return string;
})(a[1], string);
console.log(string);
console.log("----------------------");
// console.log("计算过程：第三步");
// string = (function (step, string) {
//     function setp3(step, str) {
//         let string = []
//         string[0] = str;
//         string[1] = string[0];
//         string[2] = string[0];
//         string[0] += step;
//         console.log(string[0]);
//         string[1] = string[1][0] + step + string[1][1];
//         console.log(string[1]);
//         string[2] = step + string[2];
//         console.log(string[2]);
//         return string;
//     }
//
//     for (let i = 0; i < string.length; i++) {
//         console.log(" 第" + i + "小步");
//         string[i] = setp3(step, string[i]);
//         console.log("-----------");
//     }
//     return string;
// })(a[2], string);
// console.log(string);
// console.log("----------------------");
// console.log("计算过程：第四步");
// string = (function (step, string) {
//
//     function setp43(step, str) {
//         let string = [];
//         let last = str.length - 1;
//         string[0] = str;
//         for (let i = 1; i < last + 1; i++) {
//             string[i] = string[0];
//         }
//         string[last + 1] = step + string[0];
//         string[0] += step;
//         console.log(string[0]);
//         string[1] = string[1][0] + string[1][1] + step + string[1][last];
//         console.log(string[1]);
//         string[last] = string[last][0] + step + string[last][1] + string[last][last];
//         console.log(string[2]);
//         console.log(string[last + 1]);
//         return string;
//     }
//
//     function setp4(step, str) {
//         let string = [];
//         let last = str.length - 1;
//         for (let i = 0; i < last + 1; i++) {
//             string[i] = str[i];
//         }
//
//         for (let i = 0; i < string.length; i++) {
//             console.log("  第" + i + "小步");
//             string[i] = setp43(step, string[i]);
//             console.log("-----");
//         }
//         return string;
//     }
//
//     for (let i = 0; i < string.length; i++) {
//         console.log(" 第" + i + "小步");
//         string[i] = setp4(step, string[i]);
//         console.log("-----------");
//     }
//
//     return string;
// })(a[3], string);
// console.log(string);
// console.log("----------------------");