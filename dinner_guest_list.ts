let guest_list :string[] =['Saad Khan','Ibad Khan','Hassan Rehman','Zeeshan Saleem'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is pleasure to invite you in our party.\n\nThank You!')
// }
let absent_Guest :string = 'Ibad Khan' ;
let new_Guest :string = 'Shahrukh Alam' ;
guest_list[1] = new_Guest ;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is pleasure to invite you in our party.\n\nThank You!')
// }
// console.log(`Mr. ${absent_Guest} is not coming.`)
// console.log('Good News! We find a big table so we are inviting 3 more guests.');
// array mein 3 guest add kiye hain 
guest_list.unshift('Imran Khan');
guest_list.splice(2 , 0 , 'Bilal Qazi');
guest_list.push('Zubair bhai');
// yahan per mene 7 guest k array ko print karaya hai 
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is pleasure to invite you in our party.\n\nThank You!')
// }
// sorry message to guests for not inviting 
// console.log('\nSorry we can not arrange big table, Only Two people will be invited.');
// yahan per mene guest remove kiye hain.
while(guest_list.length > 2){
   let remove_guest =  guest_list.pop();
//    console.log(`Sorry Mr. ${remove_guest}, You are not invited for the Dinner.`);
}
// hamaray bachay hue 2 guests.
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nYou are still invited.\n\nThank You!')
// }
// mene saray guest array se remove kardiye 
guest_list.splice(0, 3);
console.log(guest_list);
// excercise 19
// print a message indicating number of people you are inviting for dinner.
console.log(`total number of guests are: ${guest_list.length} `);
