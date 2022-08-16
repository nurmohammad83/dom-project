document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('Withdraw-field');
    const withdrawElement = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawElement);
   
    withdrawField.value ='';
    if(isNaN(newWithdrawAmount)){
        alert('Please enter a number')
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawAmountString = withdrawTotalElement.innerText;
    const withdrawAmount = parseFloat(withdrawAmountString);
    
    const currentBalance= document.getElementById('balance-total');
    const previousBalanceString = currentBalance.innerText;
    const currentTotal = parseFloat(previousBalanceString)
    const currentBalanceTotal = currentTotal - newWithdrawAmount;
    
    if( newWithdrawAmount > currentBalanceTotal){
        alert('Bank a tk nai ')
        return
    }
    const totalWithdraw = newWithdrawAmount + withdrawAmount;
    withdrawTotalElement.innerText = totalWithdraw;

    currentBalance.innerText = currentBalanceTotal;

    
})