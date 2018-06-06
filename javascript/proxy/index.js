let target = {};
let handlers = {}; // do nothing 
let proxy = new Proxy(target, handlers);

proxy.a = 123;
console.log(target);

(() => {
  let target = {};
  let handlers = {
    get: (target, property) => {
      target[property] = (property in target) ? target[property] : {};
      if (typeof target[property] === 'object') {
        return new Proxy(target[property], handlers)
      }
      return target[property]
    }
  }
  let proxy = new Proxy(target, handlers);
  console.log('z' in proxy.x.y);
  proxy.x.y.z = 'hello';
  console.log('z' in proxy.x.y);
  console.log(target.x.y.z);
})()

class Test {
  constructor(a, b) {
    console.log('constructor', a, b);
  }
}

// Test(1, 2);

let proxyClass = new Proxy(Test, {
  apply(target, thisArg, argumentsList) {
    return new(target.bind(thisArg, ...argumentsList))();
  }
})

// proxyClass(1, 3)

function add(a, b) {
  return a + b;
}

let proxytest = new Proxy(add, {
  construct(target, argumentsList, newTarget) {
    throw new Error(`Function ${target.name} cannot be invoked with new `)
  }
})

proxytest(1, 2)
new proxytest(1, 2)