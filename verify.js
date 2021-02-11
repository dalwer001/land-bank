// login button event controller

const loginBtn = document.getElementById('login');
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})


// deposit button event handler

const depositBtn = document.getElementById("addDeposit");

depositBtn.addEventListener("click", function () {

    const depositNumber = getInputNumber("depositAmount");
    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit =  depositNumber+currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;
    if(depositNumber<0)
    {
        alert("Deposit Number can not be negative");
    }
    else {
        updateText("currentDeposit", depositNumber);
    updateText("currentBalance", depositNumber);
    document.getElementById("depositAmount").value = "";
    }
    
})
// Withdraw button handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");
    if(withdrawNumber<0)
    {
        alert("You have not enter valid money");
    }
    else {
    updateText("currentWithdraw", withdrawNumber);
    updateText("currentBalance",-1*withdrawNumber);
    document.getElementById("withdrawAmount").value = "";
        }
    
})


function getInputNumber(id) {
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}

function updateText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    if(totalAmount<0)
    {
        alert("You have not enough money");
    }
    else{
        document.getElementById(id).innerText = totalAmount;
    }
    
}
