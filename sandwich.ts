#!/usr/bin/env node

function makeSandwich (item: string[]){
    console.log('making your sandwich with:');

    item.forEach(element => console.log("- " + element));
    console.log('Enjoy your sandwich !');

}


makeSandwich(['ham', 'cheese', 'lettuce']);

makeSandwich(['chicken', 'olive', 'mayonise']);

makeSandwich(['nutela', 'butter']);