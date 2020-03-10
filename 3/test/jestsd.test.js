const {fab}=require('../src/js/jestsd.js');

// 1 2 3 4 5 6  7  8  9
// 1 1 2 3 5 8  13 21 34
test('fab 3',function(){
    expect(fab(3)).toBe(2);
});
test('fab 4',function(){
    expect(fab(4)).toBe(3);
});