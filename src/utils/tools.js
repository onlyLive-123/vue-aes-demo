// 判断真假
export function isEmpty(val) {
  if (val == null || typeof (val) === 'undefined' || val === undefined || val === 'undefined' || ('' + val).toUpperCase() ===
    'NULL' || '' + val === '') {
    return true;
  }
  if (typeof val === 'boolean') {
    return !val;
  }
  if (val instanceof Error) return val.message === '';
  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length;
    case '[object File]':
    case '[object Map]':
    case '[object Set]':
      return !val.size;
    case '[object Object]':
      return !Object.keys(val).length;
  }

  return false;
}

// 格式化时间的格式
export function dateFormat(date, format) {
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  };
  if (/([Yy]+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return format;
}


export function isHttpHandle(url) {
  let bool = false;
  if (!isEmpty(url) && /^https?/g.test(url)) {
    bool = true;
  }
  return bool;
}

export function testMobile() {
  const userAgent = navigator.userAgent;
  if (/(iPhone|iPad|iPod|iOS)/i.test(userAgent) || /(Android)/i.test(userAgent)) {
    return true;
  }
  return false;
}

export function clickKefu() {
  const mobileUrl = 'mqqwpa://im/chat?chat_type=wpa&uin=1234567&version=1&src_type=web&web_src=oicqzone.com';
  const webUrl = 'tencent://message/?uin=1234567&Menu=yes&Site=支付系统&Service=300&sigT=42a1e5347953b64c5ff3980f8a6e644d4b31456cb0b6ac6b27663a3c4dd0f4aa14a543b1716f9d45';
  if (testMobile()) {
    window.open(mobileUrl);
  } else {
    window.open(webUrl);
  }
}


export function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}

export function testPlus() {
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf("Html5Plus") > 0) {
    return true;
  }
  return false;
}

export function testPlusAndTop() {
  const userAgent = navigator.userAgent;
  const res = (/.*(Immersed\/(\d+\.?\d*).*)/).exec(userAgent);
  if(res && res.length >=3){
    if(parseInt(res[2]) > 20){
      return true;
    }
  }
  return false;
}

