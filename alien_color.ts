// Create a variable call Alien_color
let alien_color :string = 'green';

// Write an if statement to test whether the alien's color is green. If it is,print amessage that the player just earned 5 points.
if(alien_color === 'green'){
    console.log("Player just earned 5 points !");
}

// Write one version of this program that pasees the if test and another that fails.

 alien_color = 'yellow';

// The version that fails will have no output.
if(alien_color === 'green'){
    console.log("Player just earned 5 points !");
}