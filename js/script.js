document.getElementById('calculate-btn').addEventListener('click', function(){

  //expance section calculation...
 const foodPrice = document.getElementById('food');
 const foodValueString = foodPrice.value;
 const foodValueInt = parseInt(foodValueString);

 const rentPrice = document.getElementById('rent');
 const rentValueString = rentPrice.value;
 const rentValueInt = parseInt(rentValueString);
 
 const clothesPrice = document.getElementById('clothes');
 const clothesValueString = clothesPrice.value;
 const clothesValueInt = parseInt(clothesValueString);

 const totalAmmount = foodValueInt+ rentValueInt+ clothesValueInt;
 //console.log(totalAmmount)
 const totalExpence= document.getElementById('total-expense');
 totalExpence.innerText = totalAmmount;

 const incomePrice = document.getElementById('income');
 const incomeValueString = incomePrice.value;
 const incomeValueInt = parseInt(incomeValueString);

 const balance= incomeValueInt -totalAmmount
 const balanceInt =document.getElementById('balance')
 balanceInt.innerText=balance

})

document.getElementById('save-btn').addEventListener('click', function (){
  const balanceV =document.getElementById('balance')
  const balanceValueString = balanceV.innerText;
  const balanceValueInt = parseInt(balanceValueString);
  //console.log(balanceValueInt);

  const savePrice = document.getElementById('save');
 const saveValueString = savePrice.value;
 const saveValueInt = parseInt(saveValueString);
 //console.log(saveValueInt);

const savingAmmout= balanceValueInt*(saveValueInt/100)
//console.log(savingAmmout);
const saveTaka = document.getElementById('saving-amount')
saveTaka.innerText=savingAmmout.toFixed(2)

const finalremainingBalance =balanceValueInt - savingAmmout;
//console.log(finalremainingBalance)

const remaimbalance = document.getElementById('remaining-balance')
remaimbalance.innerText= finalremainingBalance

})






