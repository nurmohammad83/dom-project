
document.getElementById("btn-depssite").addEventListener('click', function(){


    const newDepositAmount =getInputFieldValueById('deposit-field')
    
   
    const previousDepositAmount =getElementValueById('deposit-total')


    const newDepositTotal = previousDepositAmount + newDepositAmount;
   
    setElementValueById('deposit-total',newDepositTotal)
    const previousBalance = getElementValueById('balance-total')

   const  previousDepositBalance = getElementValueById('deposit-total')

   const newBalanceTotal = previousBalance + newDepositAmount;
   setElementValueById('balance-total', newBalanceTotal)
})
