const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("This is a password validation tool... welcome...")

    reader.question(`Do you even know your password?`, function(answer){
        if(answer.length >= 10){
            console.log("Your password is fine... do you feel validated?")
        } else{
            console.log("Your password is too short. You should feel bad. *spitting sound")
        }

        reader.close()
    }
    ) 