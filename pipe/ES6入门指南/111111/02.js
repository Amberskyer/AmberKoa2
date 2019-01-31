/**
 * @author wuke
 * @date 2019-01-16
 * @Description: Page:3/11  Proxy实例的方法
 */

'use strict';

/*   (title:)(start:)get方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标参数、属性名、和proxy实例本身(即this关键字指向的那个对象)，其中最后一个参数可选  */
(function () {
    let person = {
        name: "张三"
    }
    let proxy = new Proxy(person, {
        get: function (target, property) {
            if (property in target) {
                return target[property]
            } else {
                throw  new ReferenceError("Property \"" + property + "\" does not exist.")
            }
        }
    })
    proxy.name //张三
});

// proxy.age //throw  new ReferenceError("Property \"" + property + "\" does not exist.")
/*   (end:)上面代码表示，如果访问目标对象不存在的属性，会抛出一个错误。如果没有这个拦截函数，访问不存在的属性，只会返回undefined   */

/*   (start:)get方法可以继承   */
(function () {
    let proto = new Proxy({}, {
        get: function (target, propertyKey, receiver) {
            console.log('GET    ' + propertyKey)
            return target[propertyKey]
        }
    })
    let obj = Object.create(proto)
    obj.foo//GET    foo
});
/*   (end:)上面代码中，拦截操作定义在Prototype对象上面，所以如果读取obj对象继承的属性时，拦截会生效   */

/*   (start:)下面的例子使用get拦截，实现数组读取负数的索引   */
(function () {

    function createArray(...elements) {
        let handler = {
            get: function (target, propKey, receiver) {
                let index = Number(propKey)//将数据类型转为number
                if (index < 0) {
                    propKey = String(target.length + index)//将数据类型转为string
                }
                return Reflect.get(target, propKey, receiver)
            }
        }
        let target = []
        target.push(...elements)
        return new Proxy(target, handler)
    }

    let arr = createArray('a', 'b', 'c');
    arr[-1] //c
});
/*   (end:)上面代码中，数组的位置参数是-1，就会输出数组的倒数最后一个成员   */

/*   (start:)利用Proxy，可以将读取属性的操作(get)，转变为执行某个函数，从而实现属性的链式操作   */
//TODO:打印效果见02.html
(function () {

    let pipe = (function () {
        return function (value) {
            let funcStack = []
            let oproxy = new Proxy({}, {
                get: function (pipeObject, fnName) {
                    if (fnName === 'get') {
                        return funcStack.reduce(function (val, fn) {
                            return fn(val);
                        }, value);
                    }
                    funcStack.push(window[fnName])
                    return proxy
                }
            })
            return oproxy
        }
    }())

    var double = n => n * 2;
    var pow = n => n * n;
    var reverseInt = n => n.toString().split("").reverse().join("") | 0;
    pipe(3).double.pow.reverseInt.get
});
/*   (end:)上面代码设置 Proxy 以后，达到了将函数名链式使用的效果   */


/*   (start:)下面的例子则是利用get拦截，实现一个生成各种DOM节点的通用函数dom   */
//TODO:打印效果见02.html
(function () {
    const dom = new Proxy({}, {
        get(target, property) {
            return function (attrs = {}, ...children) {
                const el = document.createElement(property);
                for (let prop of Object.keys(attrs)) {
                    el.setAttribute(prop, attrs[prop])
                }
                for (let child of children) {
                    if (typeof  child === 'string') {
                        child = document.createTextNode(child);
                    }
                    el.appendChild(child)
                }
                return el
            }
        }
    })

    const el = dom.div({},
        'Hello,my name is',
        dom.a({href: '//example.com'}, 'Mark'),
        '.I like:',
        dom.ul({},
            dom.li({}, 'The web'),
            dom.li({}, 'Food'),
            dom.li({}, '...actually that\'s it')))
    document.body.appendChild(el)
});
/*   (end:)   */

/*   (start:)下面是get方法的第三参数的例子   */
(function () {
    const proxy3 = new Proxy({}, {
        get: function (target, property, receiver) {
            return receiver
        }
    })
    proxy3.getReceiver === proxy3
});

/*   (end:)上面diamante中，get方法的第三个参数receiver，总是为当前的Proxy实例   */

/*   (start:)如果一个属性不可配置(configurable)和不可写(writable),则该属性不能被代理，通过Proxy对象访问该属性会报错   */
(function () {
    const target = Object.defineProperties({}, {
        foo: {
            value: 123,
            writable: false,
            configurable: false,
        }
    })
    const handle = {
        get(target, propKey) {
            return 'abc'
        }
    }
    const proxy = new Proxy(target, handle)
    proxy.foo //TypeError: Invariant check failed
});
/*   (end:)   */


/*   (title:)set方法用来拦截摸个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和Proxy实例本身，其中最后一个参数可选   */

/*   (start:)假定Person对象有一个age属性，该属性应该是一个不大于200的整数，那么可以使用Proxy保证age的属性值符合要求   */
(function () {
    let validator = {
        set: function (obj, prop, value) {
            if (prop === 'age') {
                if (!Number.isInteger(value)) {
                    throw new TypeError('The age is not an integer');
                }
                if (value > 200) {
                    throw new RangeError('The age seems invalid');
                }
                obj[prop] = value
            }
        }
    }
    let person = new Proxy({}, validator)
    person.age = 100;// 100
    person.age = 'young'; // 报错
    person.age = 300 // 报错
});
/*   (end:)上面的代码中，由于设置了存值函数set，任何不符合要求的age属性赋值，都会抛出一个错误，这是数据验证的一种实现方法。
利用set方法，还可以数据绑定，及每当对象发生变化时，会自动更新DOM */

/*   (start:)(tips:)有时，我们会在对象上面设置内部属性，属性名的第一个字符使用下划线('_')开头，表示这些属性不应该被外部使用。
结合get和set方法，就可以做到防止这些内部属性被外部读写   */
(function () {
    const handler = {
        get(target, key) {
            invariant(key, 'get');
            return target[key]
        },
        set(target, key, value) {
            invariant(key, 'set');
            target[key] = value
            return true
        },
    };

    function invariant(key, action) {
        if (key[0] === '_') {
            throw new Error(`Invalid attempt to ${action} private "${key}" property`);
        }
    }

    const target = {}
    const proxy = new Proxy(target, handler)
    proxy._prop //Invalid attempt to get private "_prop" property
    proxy._prop = 'c' //Invalid attempt to set private "_prop" property
});
/*   (end:)上面的代码中，只要读写属性名的第一个字符是下划线，一律抛错，从而达到禁止读写内部属性的目的   */

/*   (start:)下面是set方法第四一个参数的例子   */
(function () {
    const handler = {
        set: function (obj, prop, value, receiver) {
            obj[prop] = receiver
        }
    }
    const proxy = new Proxy({}, handler)
    proxy.foo = 'bar'
    proxy.foo === proxy;//true
    proxy.foo;//{ foo: [Circular] }
});
/*   (tips:)注意，如果目标对象自身的某个属性，不可写也不可配置，那么 set 不得改变这个属性的值，只能返回同样的值，否则报错   */
/*   (end:)上面代码中，set方法的第四个参数receiver，总是返回this关键字所指向的那个对象，即proxy实例本身   */


/*   (start:)apply方法拦截函数的调用、call和apply操作   */
/*   (tips:)apply方法可以接受三个参数，分别是目标对象、目标对象的上下文对象(this)和目标对象的参数数组   */
(function () {
    let handler = {
        apply: function (target, ctx, args) {
            return Reflect.apply(...arguments)
        }
    }
    let target = function (x, y) {
        return x + y
    }
    let proxy = new Proxy(target, handler)
    proxy(1, 2)//1,2
});
/*   (end:)   */


/*   (start:)下面是一个例子   */
(function () {
    let target = function () {
        console.log('I am the target')
        return 'I am the target'
    };
    let handler = {
        apply: function () {
            console.log('I am the proxy')
            return 'I am the proxy'
        }
    };

    let p = new Proxy(target, handler)
    p()

}());
/*   (end:)上面的代码中，变量p是Proxy的实例，当它作为函数调用时(p()),就会被apply方法拦截，返回一个字符串   */

/*   (start:)下面是另一个例子   */
(function () {
    let twice = {
        apply(target, ctx, args) {
            console.log({target, ctx, args})
            return Reflect.apply(...arguments) * 2
        }
    };

    function sum(left, right) {
        return left + right
    };
    let proxy = new Proxy(sum, twice);
    proxy(1, 2);//参数为(args)
    proxy.call(null, 5, 6);//参数为(ctx,args)
    proxy.apply(null, [7, 8]);//参数为(ctx,args)
    /*   (start:)(important:)另外，直接调用Reflect.apply方法啊，也会被拦截   */
    Reflect.apply(proxy, null, [9, 10]) //38
})();
/*   (end:)上面代码中，每次执行proxy函数(直接调用或call和apply调用)，都会被apply方法拦截   */


/*   (title:)has()   */

/*   (start:)has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符   */
/*   (tips:)下面的例子使用has方法隐藏某些属性，不被in运算符发现   */
(function () {
    let handler = {
        has(target, key) {
            if (key[0] === '_') {
                return false;
            }
            return key in target
        }
    };
    let target = {
        _prop: 'foo', prop: 'foo'
    }
    let proxy = new Proxy(target, handler);
    '_prop' in proxy //false

})();
/*   (end:)上面的代码中，如果原对象的属性名的第一个字符是下划线，proxy.has就会返回false，从而不会被in运算符发现   */

/*   (start:)如果原对象不可配置或者禁止扩展，这是has拦截会报错   */
(function () {
    let obg = {a: 10}
    Object.preventExtensions(obj)
    let p = new Proxy(obj, {
        has: function (target, prop) {
            return false
        }
    });
    'a' in p //TypeError is thrown
    /*   (important:)指的注意的是，has方法拦截的是HasProperty操作，而不是HasOwnProperty从操作，即has方法不判断一个属性是对象自身的属性，还是继承的属性   */
});
/*   (end:)上面代码中，obj对象禁止扩展，结果是用has拦截就会报错。也就是说，如果某个属性不可配置(或者目标对象不可扩展)，则has方法就不得"隐藏"(即返回false)目标对象的噶属性   */


/*   (start:)另外，虽然for...in循环也用到了in运算符，但是has拦截对for...in循环不生效   */
(function () {
    let stu1 = {name: 'Mizuna-rei', score: 99};
    let stu2 = {name: 'Aya-rei', score: 59};

    let handler = {
        has(target, prop) {
            if (prop === 'score' && target[prop] < 60) {
                console.log(`${target.name} 不及格`);
                return false
            }
            return prop in target
        }
    }

    let oproxy1 = new Proxy(stu1, handler);
    let oproxy2 = new Proxy(stu2, handler);

    'score' in oproxy1
    //true
    'score' in oproxy2
    //Aya-rei 不及格
    //false

    for (let a in oproxy1) {
        console.log(oproxy1[a])
    }
    // Mizuna-rei
    // 99

    for (let b in oproxy2) {
        console.log(oproxy2[b])
    }
    // Aya-rei
    // 59
})();
/*   (end:)上面代码中，has拦截只对in循环生效，对for...in循环不生效，导致不符合要求的属性没有被排除在for...in循环之外   */


/*   (title:)construct()   */

/*   (start:)construct方法用于拦截new命令，下面是拦截对象的写法   */
(function () {
    let handler = {
        construct(target, args, newTarget) {
            //target:目标对象
            //args:构建函数的参数对象
            return new target(...args)
        }
    }
});
/*   (end:)construct方法可以接受两个参数   */


/*   (start:)下面是一个例子   */
(function () {
    let p = new Proxy(function () {

    }, {
        construct: function (target, args) {
            console.log(`called:` + args.join(','))
            return {value: args[0] * 10}
        }
    });
    (new p(1)).value
    // called:1
    // 10
})();
/*   (important:)construct方法返回的必须是一个对象，否则会报错   */
(function () {
    let p = new Proxy(function () {

    }, {
        construct: function (target, args) {
            console.log(`called:` + args.join(','))
            return 1
        }
    });
    new p(2) // 报错
})();
/*   (end:)   */