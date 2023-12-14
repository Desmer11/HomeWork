

let workingDays = ["mon", "Tue", "Wed", "Thu", "Fri"];

for (let i = 0; i < workingDays.lenght; i++){
    console.log(`Day: ${workingDays[i]}`);
}

// Print until Wed, Without Wed
for(let i = 0; i < workingDays.lenght; i++) {
    if(workingDays[i] === "Wed") {
        break;
    }
    console.log(`Day: ${workingDays[i]}`)
}


// Print all Days, Except Tue and Thu
for(let i = 0; i < workingDays.lenght; i++) {
    if(workingDays[i] === "Tue" || workingDays[i] === "Thu") {
        continue;
    }
    
    
    console.log(`Day: ${workingDays[i]}`)
}











