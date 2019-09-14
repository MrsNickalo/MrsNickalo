function clearErrors()
{
	for(var i=0; i<document.forms["betForm"].elements.length; i++)
	{
		if(document.forms["betForm"].elements[i].parentElement.className.indexOf("has-") != -1)
		{
			document.forms["betForm"].elements[i].parentElement.className= "form-group";
		}
	}
}

function resetForm()
{
	clearErrors();
	document.forms["betForm"]["bet"].value = "";
	document.getElementById("results").style.display = "none";
	document.getElementById("submitButton").innerText="Submit";
	document.forms["betForm"]["bet"].focus();
}

function validateForm()
{
	clearErrors();
	var bet = document.forms["betForm"]["bet"].value;
	if(bet=="" || isNaN(bet))
	{
		alert("Please place a bet.");
		document.forms["betForm"]["bet"].parentElement.className = "form-group has-error";
		document.forms["betForm"]["bet"].focus();
		return false;
	}
	if (bet <= 0)
	{
		alert("Please enter a positive bet.");
		document.forms["betForm"]["bet"].parentElement.className = "form-group has-error";
		document.forms["betForm"]["bet"].focus();
		return false;
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Play Again";
	return false;
}
