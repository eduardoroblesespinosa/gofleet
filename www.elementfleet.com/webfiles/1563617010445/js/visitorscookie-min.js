function setCookie(e,o,t){var i=new Date;i.setTime(i.getTime()+1*t*24*60*60*1e3);var n="expires="+i.toGMTString();document.cookie=e+"="+o+";"+n+";path=/"}function getCookie(e){for(var o=e+"=",t=decodeURIComponent(document.cookie),i=t.split(";"),n=0;n<i.length;n++){for(var r=i[n];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(o))return r.substring(o.length,r.length)}return""}function checkCookie(){var e="_visitor",o=getCookie(e);""!=o&&null!=o&&setCookie(e,o,1)}