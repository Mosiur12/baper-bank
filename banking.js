document.getElementById('Deposit-button').addEventListener('click',function(){
    const depositField = document.getElementById('depositMoney');
    const newAmountDepositText = depositField.value;
    const newAmountDeposit = parseFloat(newAmountDepositText) ;

    const totalDeposit = document.getElementById('current-deposit');

const previousDepositText = totalDeposit.innerText;
const previousDeposit = parseFloat (previousDepositText);
const newAmount = previousDeposit + newAmountDeposit;

    totalDeposit.innerText = newAmount;


        // -------Update balance---------- 
const balanceTotal = document.getElementById('balance-amount') ;
const balanceTotalText = balanceTotal.innerText;
const newBalance = parseFloat(balanceTotalText);

const amountOfBalance = newBalance + newAmountDeposit;
balanceTotal.innerText = amountOfBalance;


    // CLEAR
    depositField.value="";
    
})

// ----Handle withdraw button---------

document.getElementById('Withdrow-button').addEventListener('click',function(){
    const withdrawAmount = document.getElementById('WithdrowMoney');
    const withdrawAmountText = withdrawAmount.value;
    const previousWithdraw = parseFloat (withdrawAmountText);

    const currentWithdraw = document.getElementById('withdrw-total');
    const newWithdrawText = currentWithdraw.innerText;
    const newWithdraw = parseFloat(newWithdrawText);

    const totalWithdrawAmount = previousWithdraw + newWithdraw;

    currentWithdraw.innerText = totalWithdrawAmount;

// ------update balance for withdraw-------

const totalWithdrawBalance = document.getElementById('balance-amount');
const updateBalannceText = totalWithdrawBalance.innerText;
const updateBalannce = parseFloat(updateBalannceText);

const currentWithdrawBalance =   updateBalannce -previousWithdraw  ;

totalWithdrawBalance.innerText = currentWithdrawBalance;







    //    clear
    withdrawAmount.value = "";
})