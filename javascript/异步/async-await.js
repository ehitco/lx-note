// https://segmentfault.com/a/1190000007535316
async function testAsync() {
  throw Error('error');
  return "hello async";
}

async function test () {
  await testAsync().catch((err)=>{
    console.log(err)
  })

}
// const result = testAsync();
// console.log(result);

// testAsync().then(v => {
//   console.log(v);    // 输出 hello async
// });