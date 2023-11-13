/**
 * 类——类的继承
 * 类只能单继承不能多继承
 */

class Animal {
    _name: string;
    constructor(name: string) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    moveTo(location: string) {
        console.log(`Walking to ${location}`);
    }
}

class Cat extends Animal {
    mewint(times: number) {
        for (let i = 0; i < times; i++) {
            console.log(`meow!`);
        }
    }
}

let cat = new Cat("kiddy");
console.log(cat.name);  //kiddy
cat.moveTo("desk");     //Walking to desk
cat.mewint(3);          //meow! meow! meow!

/**
 * 重写父类成员
 *  1、重写方法和存取器
 *  2、重写构造函数
 *  3、重写成员兼容性
 */
//重写方法和存取器
class Bird extends Animal {
    get name() {
        return this._name + " bird";
    }
    set name(value: string) {
        this._name = value;
    } 
    moveTo(location: string): void {
        console.log(`Flying to ${location}`);
    }
}
let bird = new Bird("Polly");
console.log(bird.name); //Polly bird
bird.name = "Starling";
bird.moveTo("a tree");  //Flying to a tree

//重写构造函数
class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
class Administrator extends User {
    authority: string;
    constructor(name: string, authority: string) {
        //使用this关键词前必须先调用super
        // this.name = name; 报错
        //重写的构造函数必须使用super
        super(name);
        this.authority = authority;
    }
}
let admin = new Administrator("Duke", "Admin");
console.log(admin.name);        //Duke
console.log(admin.authority);   //Admin

//重写成员的兼容性
class AnimalC {
    //解决属性冲突
    name: string | number;
    eat(food: string) {console.log(`Eating ${food}`)};
}

class WhiteMouse extends AnimalC {
    name: number;
    //参数类型不一致，报错
    // eat(food: Animal): void {    } 报错
    //解决方法冲突
    eat(food: AnimalC | string) {
        console.log(`Eating ${(typeof food == "string") ? food : food.name}`);
    }
}

//复用父类成员
class BirdC extends Animal {
    canFly: boolean = false;
    get name() {
        if (this.canFly) {
            return this._name + " bird";
        } else {
            //super 调用父类成员属性
            return super.name;
        }
    }
    moveTo(location: string): void {
        if (this.canFly) {
            console.log(`Flying to ${location}`);
        } else {
            //super 调用父类成员方法
            super.moveTo(location);
        }
    }
}

let bird1 = new BirdC("penguin");
bird1.canFly = false;
console.log(bird1.name);    //penguin
bird1.moveTo("a iceberg");  //Walking to a iceberg

let bird2 = new BirdC("swallow");
bird2.canFly = true;
console.log(bird2.name);    //swallow bird
bird2.moveTo("a tree");     //Flying to a tree


export{}