let guest_list :string[] =['Saad Khan','Ibad Khan','Hassan Rehman','Zeeshan Saleem'];
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is pleasure to invite you in our party.\n\nThank You!')
}
let absent_Guest :string = 'Ibad Khan' ;
let new_Guest :string = 'Shahrukh Alam' ;
guest_list[1] = new_Guest ;
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is pleasure to invite you in our party.\n\nThank You!')
}
console.log(`Mr. ${absent_Guest} is not coming.`)
