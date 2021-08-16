// handle deposit button event 

document.getElementById('deposit-button').addEventListener('click',function(){
    // get the amount deposited
  const newDepositInput = document.getElementById('deposit-input');
  const newDepositValue = newDepositInput.value;
  const newDepositAmount =parseFloat(newDepositValue);
  

  // update deposit total

  const depositTotal = document.getElementById('deposit-total');
  const previousDepositText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);
 
  const totalDepositAmount = previousDepositAmount + newDepositAmount;
  
  depositTotal.innerText = totalDepositAmount;

  //UPDATE ACCOUNT BALANCE(adding with balance)

  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
   const newBalanceTotal = previousBalanceTotal +  newDepositAmount;
  balanceTotal.innerText = newBalanceTotal;

  //clear the deposit input field
  newDepositInput.value = '';



});

  // WITHDRAW AND REDUCE BALANCE

  document.getElementById('withdraw-button').addEventListener('click',function(){

  // get the withdraw amount
  const newWithdrawInput = document.getElementById('withdraw-input');
  const newWithdrawValue = newWithdrawInput.value;
  const newWithdrawAmount =parseFloat(newWithdrawValue); 
 
 
  //UPADATE WITHDRAW TOTAL
  const withdrawTotal = document.getElementById('withdraw-total');
  const previousWithdrawText =withdrawTotal.innerText;
  const previousWithdrawAmount = parseFloat(previousWithdrawText);
 
  const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
  
  withdrawTotal.innerText = totalWithdrawAmount;

   //UPDATE ACCOUNT BALANCE(reducing balance)
   
   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
   balanceTotal.innerText = newBalanceTotal;
 
   //clear the deposit input field
   newWithdrawInput.value = '';


  });