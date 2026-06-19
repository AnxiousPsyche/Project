let age = Number(prompt("Please enter your age:"));
let message = 
            age >= 100 ? "Wow! you are a centenarian!" 
            :age >=18 ? "Congrats! you are an adult."
            : age <= 0 ? "You haven't been conceived yet!"
            : "Sorry, you are not an adult yet.";
prompt(message);