// store the location in the array. make sure the array is not in alphabetical order.
let places :string[] = ['Pakistan', 'UK', 'USA', 'Italy'];
// print your array in its original order.
console.log('original ' + places);
// print your array in alphabetical order without modifying the actual list.
console.log('copy ' + [...places].sort());
// show that your array is stil in its original order by printing it.
console.log('original ' + places);
// print your array in reverse alphabetical order without changing the order or the original list.
console.log('copy ' + [...places].sort().reverse());
// show that your array is still in its original order by printing it again.
console.log('original ' + places);
// reverse the order of your list. print the array to show that its order has changed.
console.log('original ' + places.reverse());
// reverse the order of your list again. print the list to show it's back to its original order.
console.log('original ' + places.reverse());
// sort your array so it's sorted in alphabetical order. print the array to show that its order has been changed.
console.log('original ' + places.sort());
// sort to change your array so it's sorted in reverse alphabetical order. print the list to show that its order has changed.
console.log('original ' + places.sort().reverse());  