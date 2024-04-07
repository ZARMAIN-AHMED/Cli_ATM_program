import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let mypinn = 12345;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin ",
        type: "number",
    },
]);
if (pinAnswer.pin === mypinn) {
    console.log("Correct pin code !!");
    let operationanswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    console.log(operationanswer);
    if (operationanswer.operation === "withdraw") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            }
        ]);
        if (amountans.amount > myBalance) {
            console.log("Insufficient Blance");
        }
        else {
            myBalance -= amountans.amount;
        }
        console.log(`your remaining balance is:, ${myBalance}`);
    }
    if (operationanswer.operation === "fast cash") {
        let amountanswer = await inquirer.prompt([
            {
                name: "option",
                message: "Select amount to withdraw",
                type: "list",
                choices: [50, 100, 200, 500],
            },
        ]);
        myBalance -= amountanswer.option;
        console.log(`your remaining balance is:, ${myBalance}`);
    }
    else if (operationanswer.operation === "check balance") {
        console.log("your balance is: " + myBalance);
    }
}
else {
    console.log("incorret pin code");
}
