import vm from 'vm';
const ContextObject = vm.runInNewContext('Object');
console.log(Object === ContextObject);
console.log(new  Object() instanceof ContextObject);
console.log(ContextObject.name);
console.log(Object.name);
const array = vm.runInNewContext('Array');
