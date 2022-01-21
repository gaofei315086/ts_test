const x:unknown = 'a'
let y:number = 1
// 断言只是用来欺骗编译器的，并不能实际决定类型，慎用
y = x as number
console.log(x, typeof y)
