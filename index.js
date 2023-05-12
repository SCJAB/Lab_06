var UI_NumberValue = document.getElementById('UI_Number');

function sum(val) 
{
	return (UI_NumberValue).value += val;
}
function difference(val) 
{
	return (UI_NumberValue).value += val;
}
function product(val) 
{
	return (UI_NumberValue).value += val;
}
function quotient(val) 
{
	return (UI_NumberValue).value += val;
}

function clearCalculation() 
{
    document.getElementById('UI_Number').value = '';
    document.getElementById('result').innerText = '';
}

function calculateall() 
{
	var result = eval(document.getElementById('UI_Number').value);
	document.getElementById('result').innerText = result;
}