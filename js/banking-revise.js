function getInputValue(inputId) {
    // debugger;
    const inputvalueAmount = parseFloat((document.getElementById(inputId).value));
    document.getElementById(inputId).value = '';
    return inputvalueAmount;
}

function updateTotalField(totalFieldId, inputvalueAmount) {
    const totalField = document.getElementById(totalFieldId);
    const totalFieldAmount = parseFloat((totalField.innerText));
    totalField.innerText = totalFieldAmount + inputvalueAmount;
}

function getCurrentBalance() {
    const balance = document.getElementById('balance-total');
    const balanceAmount = parseFloat((balance.innerText));
    return balanceAmount;
}

function updateBalance(inputAmount, isAdd) {
    const balance = document.getElementById('balance-total');
    const balanceAmount = getCurrentBalance();
    if (isAdd == true) {
        balance.innerText = balanceAmount + inputAmount;
    }
    else {
        balance.innerText = balanceAmount - inputAmount;
    }
}


document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInputAmount = getInputValue('deposit-input');
    if (depositInputAmount > 0) {
        updateTotalField('deposit-total', depositInputAmount);
        updateBalance(depositInputAmount, true);
    }
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawInputAmount > 0 && withdrawInputAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawInputAmount);
        updateBalance(withdrawInputAmount, false);
    }
    else if (withdrawInputAmount > currentBalance) {
        alert('bhai, apner current balance onek kom.komaiyya chan');
    }
})