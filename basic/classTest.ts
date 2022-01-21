class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
// 错误: Animal 与 Employee 不兼容.
// animal = employee; 

// 调用顺序
// 全局上下文
// 函数上下文
    // 直接调用  指向window
    // bind call apply 调用 指向绑定对象
    // 箭头函数  指向外层的作用域
// 作为对象的方法
    // 指向调用的对象
// 构造函数
    // this被绑定到正在构造的新对象