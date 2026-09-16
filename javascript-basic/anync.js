console.log('処理1');
console.log('処理2');
console.log('処理3');

setTimeout(() => {
   console.log('処理4(非同期処理)'); 
}, 4000);

console.log('処理5');
console.log('処理6');
