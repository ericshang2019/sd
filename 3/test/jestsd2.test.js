const mod=require('../src/js/jestsd2');

test('ajax',async function (){
expect(await mod.sum(2,5)).toBe(7);
});