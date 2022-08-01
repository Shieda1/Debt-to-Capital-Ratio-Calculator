// https://calculator.swiftutors.com/debt-to-capital-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const debttoCapitalRatioRadio = document.getElementById('debttoCapitalRatioRadio');
const interestBearingDebtRadio = document.getElementById('interestBearingDebtRadio');
const shareholdersEquityRadio = document.getElementById('shareholdersEquityRadio');

let debttoCapitalRatio;
let interestBearingDebt = v1;
let shareholdersEquity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

debttoCapitalRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Interest Bearing Debt';
  variable2.textContent = 'Shareholder\'s Equity';
  interestBearingDebt = v1;
  shareholdersEquity = v2;
  result.textContent = '';
});

interestBearingDebtRadio.addEventListener('click', function() {
  variable1.textContent = 'Debt to Capital Ratio';
  variable2.textContent = 'Shareholder\'s Equity';
  debttoCapitalRatio = v1;
  shareholdersEquity = v2;
  result.textContent = '';
});

shareholdersEquityRadio.addEventListener('click', function() {
  variable1.textContent = 'Debt to Capital Ratio';
  variable2.textContent = 'Interest Bearing Debt';
  debttoCapitalRatio = v1;
  interestBearingDebt = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(debttoCapitalRatioRadio.checked)
    result.textContent = `Debt to Capital Ratio = ${computeDebttoCapitalRatio().toFixed(2)}`;

  else if(interestBearingDebtRadio.checked)
    result.textContent = `Interest Bearing Debt = ${computeInterestBearingDebt().toFixed(2)}`;

  else if(shareholdersEquityRadio.checked)
    result.textContent = `Shareholder's Equity = ${computeShareholdersEquity().toFixed(2)}`;
})

// calculation

function computeDebttoCapitalRatio() {
  return Number(interestBearingDebt.value) / (Number(interestBearingDebt.value) + Number(shareholdersEquity.value));
}

function computeInterestBearingDebt() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}

function computeShareholdersEquity() {
  return (Number(interestBearingDebt.value) / Number(debttoCapitalRatio.value)) - Number(interestBearingDebt.value);
}