test('two plus two is four',()=>{
    expect(2+2).toBe(4)
})

test('object',()=>{
    const data={one:1};
    data['two']=2;
    expect(data).toEqual({one:1,two:2})
})

test('bollen',()=>{
    expect(1).toBeTruthy();
    expect(0).toBeFalsy();
})
