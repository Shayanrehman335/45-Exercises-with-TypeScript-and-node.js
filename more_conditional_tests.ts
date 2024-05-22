// equality test 1
console.log("Equality test with strings: ", "Apple" === "Apple");
//inequality test 2
console.log("inequality test with strings: ", ("Apple" as string) != "Orange");

//  test using lower case function
console.log("Lower case function test: ", "HELLO".toLowerCase() === "hello");

//  Numerical test involving equality
console.log("Equality test with numbers: ", 26 === 26);
//  Numerical test involving  Inequality
console.log("inequality test with numbers: ", (26 as number) != 35);

// greater than test
console.log("Greater than test: ", 10 > 5);
// less than test
console.log("Less than test: ", 5 < 10);

// greater than or equal to
console.log("Greater than and equal to test: ", 10 >= 10);
//  and less than or equal to
console.log("less than and equal to test: ", 5 <= 10);

// Test using "and" operator
console.log("And operator test:", 5===5 && 10 > 5);
// Test using "or" operator
console.log("Or operator test:", 5===5 || 12 > 6);

// Test whether an item is in array
const fruits :string[] = ['Apple', 'Guava']
console.log('Test "Guava" in the array:', fruits.includes("Guava"));

// Test whether an item is not in array
console.log('Test "Banana" is not in array:', fruits.includes("Banana"));

// Test whether an item is not in array
console.log('Test "Banana" is not in array:', !fruits.includes("Banana"));

