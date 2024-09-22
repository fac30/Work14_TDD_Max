// testing map()

test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});

test("map() should return empty array given an empty array as input (length = 0 and type 'object')", () => {
  const result = map([], () => {});
  equal(result.length, [].length);
  equal(typeof(result), typeof([]));
});

// testing filter()

test("filter() should return an array with the same number of elements or less", () => {
  const result = filter([1], () => {});
  equalOrLess(result.length, 1);
});

test("filter() should return each element of the array that pass the fn argument", () => {
  const result = filter([1, 2, 3], (x) => x > 1);
  const expected = [2, 3];
  for (i = 0; i < expected.length; i++) {
    console.group(`Testing array at index ${i}:`)
    equal(result[i], expected[i]);
    console.groupEnd();
  }
});

test("filter() should return empty array given an empty array as input (length = 0 and type 'object')", () => {
  const result = filter([], () => {});
  equal(result.length, [].length);
  equal(typeof(result), typeof([]));
});

// testing every()

test("every() should return a boolean", () => {
  const result = every([1], () => {});
  equal(typeof(result), "boolean");
});

test("every() should return true with an array of positive numbers testing for x > 0", () => {
  const result = every([1, 2, 3], (x) => x > 0);
  equal(result, true);
});

test("every() should return false with an array of positive numbers testing for x > 1", () => {
  const result = every([1, 2, 3], (x) => x > 1);
  equal(result, false);
});

test("every() should return true given an empty array", () => {
  const result = every([], () => {});
  equal(result, true);
});

// testing some()

test("some() should return a boolean", () => {
  const result = some([1], () => {});
  equal(typeof(result), "boolean");
});

test("some() should return false with an array of positive numbers testing for x < 0", () => {
  const result = some([1, 2, 3], (x) => x < 0);
  equal(result, false);
});

test("some() should return true with an array of positive numbers testing for x > 1", () => {
  const result = some([1, 2, 3], (x) => x > 1);
  equal(result, true);
});

test("some() should return false given an empty array", () => {
  const result = some([], () => {});
  equal(result, false);
});

// testing find()

test("find() should return undefined with an array of positive numbers testing for x < 0", () => {
  const result = find([1, 2, 3], (x) => x < 0);
  equal(result, undefined);
});

test("find() should return 2 with an array of positive numbers testing for x > 1", () => {
  const result = find([1, 2, 3], (x) => x > 1);
  equal(result, 2);
});

test("find() should return undefined given an empty array", () => {
  const result = find([], () => {});
  equal(result, undefined);
});

// testing reduce()

test("reduce() should return 0 with an empty array and initial value of 0", () => {
  const result = reduce([], () => {}, 0);
  equal(result, 0);
});

test("reduce() should return the sum of all numbers with an array of numbers and + accumulator and initial value of 0", () => {
  const result = reduce([1, 2, 3], (acc, current) => acc + current, 0);
  equal(result, 6);
});

test("reduce() should return the product of all numbers with an array of numbers and * accumulator and no initial value", () => {
  const result = reduce([1, 2, 3], (acc, current) => acc * current);
  equal(result, 6);
});

test("reduce() should return 0 with an array of numbers and * accumulator and and initial value of 0", () => {
  const result = reduce([1, 2, 3], (acc, current) => acc * current, 0);
  equal(result, 0);
});

test("reduce() should return the quotient of all numbers with an array of numbers and / accumulator and no initial value", () => {
  const result = reduce([1, 2, 3], (acc, current) => acc / current);
  equal(result, 1/6);
});

test("reduce() should return 0 with an array of numbers and / accumulator and and initial value of 0", () => {
  const result = reduce([1, 2, 3], (acc, current) => acc / current, 0);
  equal(result, 0);
});

test("reduce() should return the a concatenation of all string with an array of strings and + accumulator with no initial value", () => {
  const result = reduce(["hello", " ", "world"], (acc, current) => acc + current);
  equal(result, "hello world");
});