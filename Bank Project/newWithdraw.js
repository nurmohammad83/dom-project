
document.getElementById("btn-withdraw").addEventListener('click', function(){


    const newWithdrawAmount =getInputFieldValueById('Withdraw-field')


    const previousWithdrawAmount =getElementValueById('withdraw-total')

    

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
   
    setElementValueById('withdraw-total',newWithdrawTotal)
    const previousBalance = getElementValueById('balance-total')

   const  previousWithdrawBalance = getElementValueById('withdraw-total')

   const newBalanceTotal = previousBalance - newWithdrawAmount;
   setElementValueById('balance-total', newBalanceTotal)
})