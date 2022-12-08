const anyString1 = '中文';
const anyString2 = 'abc手动阀df';
const anyString3 = '%$中文33ww';
const anyString4 = '345zhong#33&';

console.log(anyString2.charAt())
console.log(isChinese(anyString2.charAt()));
console.log(/^[a-zA-Z]+$/.test(anyString2.charAt()))

function isChinese(str) {
  // 中文万国码正则
  if (/[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]/.test(str)) {
      return true;
  } else {
      return false;
  }
}

function isSymbol(str) {
  const reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
  if(reg.test(str)) {
    return true;
  } else {
    return false;
  }
}