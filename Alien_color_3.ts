let alienColors: string = "green";

// version 1
if (alienColors === "green") {
  console.log("Version 1: Player earned 5 points.");
} 
else if (alienColors === "yellow") {
  console.log("player earned 10 points.");
}
 else if (alienColors === "red") {
  console.log("player earned 15 points.");
}
 else {
  console.log("Please select right color");
}

// version 2
alienColors = "yellow";

if (alienColors === "green") {
    console.log("player earned 5 points.");
  } 
  else if (alienColors === "yellow") {
    console.log("Version 2: Player earned 10 points.");
  }
   else if (alienColors === "red") {
    console.log("player earned 15 points.");
  }
   else {
    console.log("Please select right color");
  }

//   version 3
  alienColors = "red";

  if (alienColors === "green") {
    console.log("player earned 5 points.");
  } 
  else if (alienColors === "yellow") {
    console.log("player earned 10 points.");
  }
   else if (alienColors === "red") {
    console.log("Version 3: Player earned 15 points.");
  }
   else {
    console.log("Please select right color");
  }