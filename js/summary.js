function getInputValue(inputId) {
    debugger;
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputAmount = parseFloat(inputText);
    // clear input field 
    input.value = '';
    return inputAmount;
}

function getTotalField(totalFieldId, inputAmount) {
    const totalField = document.getElementById(totalFieldId);
    const totalFieldText = totalField.innerText;
    const totalFieldAmount = parseFloat(totalFieldText);
    totalField.innerText = inputAmount + totalFieldAmount;
}

function getCurrentBalance() {
    const balance = document.getElementById('balance-total');
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);
    return balanceAmount;
}

function updateBalance(inputAmount, isAdd) {
    const balance = document.getElementById('balance-total');
    // const balanceText = balance.innerText;
    // const balanceAmount = parseFloat(balanceText);
    const balanceAmount = getCurrentBalance();
    if (isAdd == true) {
        balance.innerText = balanceAmount + inputAmount;
    }
    else {
        balance.innerText = balanceAmount - inputAmount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInputValue = getInputValue('deposit-input');
    if (depositInputValue > 0) {
        getTotalField('deposit-total', depositInputValue);
        updateBalance(depositInputValue, true);
    }
})


document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputValue = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawInputValue > 0 && withdrawInputValue < currentBalance) {
        getTotalField('withdraw-total', withdrawInputValue);
        updateBalance(withdrawInputValue, false);
    }
    if (withdrawInputValue > currentBalance) {
        console.log('bhai.apnarto eto balance nai,aro komaiya chan');
    }
})