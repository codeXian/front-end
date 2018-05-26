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