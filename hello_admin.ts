const userName: string[] = ["Admin", "Shayan", "Adeel", "Faazi", "Hassan"];

for (let i = 0; i < userName.length; i++) {
  if (userName[i] === "Admin") {
    console.log("Hello Admin, Would you like to see a status report?");
  } else {
    console.log(`Hello ${userName[i]}, thankyou for logging in again.`);
  }
}
