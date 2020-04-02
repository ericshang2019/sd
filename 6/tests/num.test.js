const mod=require('../src/js/num.js');
test('1',()=>{
  expect(mod.sum(1,2)).toBe(3);
});
test('2',()=>{
  expect(mod.sum(1,3)).toBe(4);
});
