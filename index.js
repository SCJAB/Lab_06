var UI_Number1 = document.getElementById("UI_Number");
var UI_Number2 = document.getElementById("UI_Number_Result");
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
  var UI_NumberValue1 = parseFloat(UI_Number1.value);
  var UI_NumberValue2 = parseFloat(UI_Number2.value);

  if (operator === "+")
  {
    return UI_NumberValue1 + UI_NumberValue2;
  }
  else if (operator === "-")
  {
    return UI_NumberValue1 - UI_NumberValue2;
  }
  else if (operator === "*")
  {
    return UI_NumberValue1 * UI_NumberValue2;
  }
  else if (operator === "/")
  {
    return UI_NumberValue1 / UI_NumberValue2;
  }
  else if (operator === "C")
  {
    document.getElementById("UI_Number").value = "";
	  document.getElementById("UI_Number_Result").value = "";
  }
}