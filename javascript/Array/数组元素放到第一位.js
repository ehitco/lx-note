let  arr = [{name:'章三',age:1},{name:'li',age:2},{name:'wang',age:4},{name:'liu',age:9}]
let obj = {};
arr.forEach((item,index)=>{
    if(item.name === 'li'){
        obj = item;
        arr.splice(index,1)
        return;
    }
 
})
 
arr.unshift(obj);
console.log(arr);