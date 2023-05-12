var UI_Number = document.getElementById("UI_number");
var result = document.getElementById("result");

function sum()
{
  result.innerHtml = getResult("+");
}
function difference()
{
  result.innerHtml = getResult("-");
}
function product()
{
  result.innerHtml = getResult("*");
}
function quotient()
{
  result.innerHtml = getResult("/");
}
function clear()
{
  result.innerHtml = getResult("c");
}

function getResult(operator)
{
  var UI_NumberValue = parseFloat(UI_Number.value);

  if (operator === "+")
  {
    return UI_NumberValue + UI_NumberValue
  }
}