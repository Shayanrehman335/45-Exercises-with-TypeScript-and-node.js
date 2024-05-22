let personName :string = '';

personName = prompt('what is your name?') || '';

let lowercase :string =personName.toLocaleLowerCase();
let uppercase :string =personName.toLocaleUpperCase();
let titlecase :string =personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if (personName !== null && personName !== ''){
    alert (`Hello ${personName}, here are your name in:
    LowerCase: ${lowercase}
    UpperCase: ${uppercase}
    TitleCase: ${titlecase}`)
}
else{
    alert('please fill your name !')
}