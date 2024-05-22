let current_users: string[] = ['Shayan' , 'HasSan' , 'MajiD' , 'Shoaib'];

let new_users: string[] = ['Salman', 'Faisal', 'Shayan', 'Hamza'];

new_users.forEach(newUsername => {
    let lowerCase: string = newUsername.toLowerCase();
    if(current_users.map(user=> user.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${newUsername} is not available. Please write a different username `);
    }
    else{
        console.log(`The username ${newUsername} is available.`)
    }
})
