const evolve = require('./index');

test('it correctly evolves once', () => {
  const input1 = [
    [0,0,2,2,0,0,0,0,0,0],
    [0,0,0,0,1,3,1,0,0,0],
    [0,0,0,2,0,3,0,0,1,3],
    [0,0,0,0,1,3,0,0,0,3],
    [0,2,2,0,0,0,1,3,1,0],
    [0,0,0,0,0,2,2,0,0,0],
    [0,0,2,0,2,0,0,0,0,0],
    [0,0,0,0,2,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ]
  const output1 = [
    [0,0,3,3,0,0,0,0,0,0],
    [0,0,0,0,2,0,2,0,0,0],
    [0,0,0,3,0,0,0,0,2,0],
    [0,1,0,1,2,0,0,0,0,0],
    [0,3,3,0,0,1,2,0,2,0],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,3,0,1,0,0,0],
    [0,0,0,0,3,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ]

  const input2 = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,2,0,0,0],
    [0,0,3,3,2,0,0,0,2,0],
    [0,1,0,0,0,0,0,0,2,0],
    [0,0,3,0,0,1,2,0,0,0],
    [0,0,1,3,3,3,0,0,0,0],
    [0,0,0,1,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ]
  const output2 = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,2,2,0,1,0,1,0,0],
    [0,0,0,0,3,1,0,0,3,1],
    [0,2,0,0,0,1,0,0,3,1],
    [0,0,0,0,0,2,3,1,0,0],
    [0,0,2,0,0,0,0,0,0,0],
    [0,0,0,2,0,2,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ]

  const input3 = [
    [0,0,0,0,1,3,1,0,0,0],
    [0,0,0,0,0,3,0,0,0,0],
    [0,0,2,0,0,0,0,3,1,0],
    [0,0,2,0,2,3,0,0,3,0],
    [0,0,2,0,0,0,0,3,0,0],
    [0,0,0,0,0,2,1,3,1,0],
    [0,0,0,0,2,2,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ]
  const output3 = [
    [0,0,0,0,2,0,2,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,3,0,0,0,0,0,2,0],
    [0,0,3,0,3,0,0,0,0,0],
    [0,1,3,0,1,1,0,0,0,0],
    [0,0,0,1,0,0,2,0,2,0],
    [0,0,0,0,3,0,1,0,0,0],
    [0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ]

  expect(evolve(input1)).toEqual(output1);
  expect(evolve(input2)).toEqual(output2);
  expect(evolve(input3)).toEqual(output3);
});