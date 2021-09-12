export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this , args);
      /* 其中 this 是你想指定的上下文，
      他可以是任何一个 JavaScript 对象(JavaScript 中一切皆对象)，
      call 需要把参数按顺序传递进去，而 apply 则是把参数放在数组里。 */
    }, delay);
  };
}


// 时间格式
export function getDate(date, format) {
  // 获取年份
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  var o = {
    "M+": date.getMonth() + 1, // montdateh
    "d+": date.getDate(), // day
    "h+": date.getHours(), // hour
    "m+": date.getMinutes(), // minute
    "s+": date.getSeconds(), // second
    "q+": Math.floor((date.getMonth() + 3) / 3), // quarter
    "S": date.getMilliseconds()
    // millisecond
  }

  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
}

/* 
正则表达式？ 字符串匹配用

y+  ->1个或者多个
y-  -> 0个或者多个
y? ->0个或者1个y
*/