// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }
// console.log((doubleIt(5)));


function getInputValue(inputId) {
    debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previusTotal = parseFloat(totalText);
    totalElement.innerText = amount + previusTotal;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    return balanceTotalAmount;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceTotalAmount = parseFloat(balanceTotalText);
    const balanceTotalAmount = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalAmount + amount;
    }
    else {
        balanceTotal.innerText = balanceTotalAmount - amount;
    }
}


//event handler on deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    // get deposit amount 
    // const depositInput = document.getElementById('deposit-input');
    // const depositInputText = depositInput.value;
    // const depositInputAmount = parseFloat(depositInputText);


    //update deposit amount
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const depositTotalAmount = parseFloat(depositTotalText);
    // depositTotal.innerText = depositInputAmount + depositTotalAmount;



    //update balance amount
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceTotalAmount = parseFloat(balanceTotalText);
    // balanceTotal.innerText = balanceTotalAmount + depositInputAmount;


    const depositInputAmount = getInputValue('deposit-input');
    if (depositInputAmount > 0) {
        updateTotalField('deposit-total', depositInputAmount);
        updateBalance(depositInputAmount, true);
    }



})
//event handler on withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get withdraw amount
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawInputText = withdrawInput.value;
    // const withdrawInputAmount = parseFloat(withdrawInputText);

    //update withdraw amount
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const withdrawTotalAmount = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText = withdrawTotalAmount + withdrawInputAmount;


    //clear withdraw input field
    //    withdrawInput.value ='';

    //update balance amount
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceTotalAmount = parseFloat(balanceTotalText);
    // balanceTotal.innerText = balanceTotalAmount - withdrawInputAmount;

    const withdrawInputAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawInputAmount > 0 && withdrawInputAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawInputAmount);
        updateBalance(withdrawInputAmount, false);
    }
    if (withdrawInputAmount > currentBalance) {
        console.log('you can not withdraw more than what you have in your account');
    }


})