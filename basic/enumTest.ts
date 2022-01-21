enum Color {Red, Green, Blue}
console.log(Color.Red);
let x: [string, number]
{}{}
type testType = {
  readonly textx: string
  readArr: ReadonlyArray<number>
  // 声明接收其他任意属性
  [propName: string]: any
}
let y: testType = {
  textx: '1',
  readArr: [1,2,3],
  // 其他属性
  a: 1
}
// 作为属性  作为变量用const
// 不可给只读属性赋值
// y.textx = 2
// 只读类型的数组
// y.readArr[2] = 1

