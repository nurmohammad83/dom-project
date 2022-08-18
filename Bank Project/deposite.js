document.getElementById('btn-depssite').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const NewDepositString= depositField.value;
    const NewDepositAmount = parseFloat(NewDepositString)
    depositField.value ='';

    if(isNaN(NewDepositAmount)){
      alert('Enter a number')
      return;
    }
    
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText
    const previousAmount = parseFloat(previousDepositTotalString)

     const currentAmount = previousAmount + NewDepositAmount;
   depositTotalElement.innerText = currentAmount;

   const currentBalance= document.getElementById('balance-total');
   const previousBalanceString = currentBalance.innerText;
   const currentTotal = parseFloat(previousBalanceString)


   const currentBalanceTotal = currentTotal + NewDepositAmount;
   currentBalance.innerText = currentBalanceTotal;




   
})