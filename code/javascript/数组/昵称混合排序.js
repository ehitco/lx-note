var goods = [
  {'goodSn': 'x02','goodName': '牛仔裤z', 'price': '178'},
  {'goodSn': 'a03','goodName': 'Naa', 'price': '78'},
  {'goodSn': 'a03','goodName': '王总', 'price': '78'},
  {'goodSn': 'a03','goodName': 'w', 'price': '78'},
  {'goodSn': 'a03','goodName': '直三正品拖鞋', 'price': '78'},
  {'goodSn': 'a03','goodName': 'b', 'price': '78'},
  {'goodSn': 'a03','goodName': '包', 'price': '78'},
  {'goodSn': 'a03','goodName': 'c', 'price': '78'},
  {'goodSn': 'a02','goodName': '牛仔裤a', 'price': '178'}];

 // 数字字母中文混合排序
function arrSortMinToMax(a, b) {
  // 判断是否为数字开始; 为啥要判断?看上图源数据
  if (/^\d+/.test(a.Name) && /^\d+/.test(b.Name)) {
      // 提取起始数字, 然后比较返回
      return /^\d+/.exec(a.Name) - /^\d+/.exec(b.Name);
      // 如包含中文, 按照中文拼音排序
  } else if (isChinese(a.Name) && isChinese(b.Name)) {
      // 按照中文拼音, 比较字符串
      return a.Name.localeCompare(b.Name, 'zh-CN')
  } else {
      // 排序数字和字母
      return a.Name.localeCompare(b.Name, 'en');
  }
}

// 检测是否为中文，true表示是中文，false表示非中文ß
function isChinese(str) {
  // 中文万国码正则
  if (/[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]/.test(str)) {
      return true;
  } else {
      return false;
  }
}

//对数据进行排序
_sortData = (dataList,sortType,field)=>{
  //拷贝一份数据
  dataList = dataList.slice(0);
  //判断是否含有非数字
  let isNumber = dataList.some(item=>{
      return isNaN(field ? item[field] : item);
  });
  if(sortType === 'asc'){
      //升序
      if(!isNumber){
          //数字排序
          dataList.sort((dataA,dataB)=>{
              return (field 
                  ? +dataA[field] - +dataB[field]
                  : +dataA - +dataB);
          });
      }else{
          //非数字排序
          dataList.sort((dataA,dataB)=>{
              return (field
                  ? dataA[field].localeCompare(dataB[field])
                  : dataA.localeCompare(dataB));
          })
      }
  }else if(sortType === 'desc'){
      //降序
      //升序
      if(!isNumber){
          //数字排序
          dataList.sort((dataA,dataB)=>{
              return (field 
                  ? +dataB[field] - +dataA[field]
                  : +dataB - +dataA);
          });
      }else{
          //非数字排序
          dataList.sort((dataA,dataB)=>{
              return (field
                  ? dataB[field].localeCompare(dataA[field])
                  : dataB.localeCompare(dataA));
          })
      }
  }
  return dataList;
}


// info.sort(arrSortMinToMax);
// console.log(info);
console.log(_sortData(goods,'asc', 'goodName'))

