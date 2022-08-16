document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('Withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const newWithdraw = parseFloat(withdrawAmountString);
    
    withdrawField.value = ''
    if(isNaN(newWithdraw)){
        alert('Enter a number')
        return;
    }


    const withdrawAmount = document.getElementById('withdraw-total')
    const newWithdrawAmountString = withdrawAmount.innerText;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    const currentWithdraw = newWithdraw + newWithdrawAmount;
    withdrawAmount.innerText = currentWithdraw;


    const balance = document.getElementById('balance-total');
    const balanceString = balance.innerText;
    const curreentBalance = parseFloat(balanceString);
    const netBalance = curreentBalance - newWithdraw;
    balance.innerText = netBalance;

})


