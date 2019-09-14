/*
Author: Lindsay Nickalo
Email: bradleyL4@winthrop.edu
Date: September 13, 2019
Purpose: JavaScript for evens.html
*/

function findEvens(start, end, step)
{
//	var start = document.forms["numberForm"]["startNum"];
//	var end = document.forms["numberForm"]["endNum"];
//	var step = document.forms["numberForm"]["stepNum"];
	var size = end - start;
	var evens = [];
	var selected = [];
//	document.getElementById("testing").innerText="start: " + start + " end: " + end + " step: " + step + " size: " + size;
	for(var i=start; i<=end; i++)
	{
		if(Number(i)%2==0)
		{
			evens.push(Number(i));
//			document.getElementById("testing").innerText="fine";
		}
	}
	for(var n=0; n<evens.length; n++)
	{
		if(n%step==0)
		{
			selected.push(evens[n]);
		}
	}
	return document.getElementById("answer").innerText= selected;
}

function clearErrors()
{
        for(var i=0; i<document.forms["numberForm"].elements.length; i++)
        {
                if(document.forms["numberForm"].elements[i].parentElement.className.indexOf("has-") != -1)
                {
                        document.forms["numberForm"].elements[i].parentElement.className= "form-group";
                }
        }
}

function resetForm()
{
        clearErrors();
        document.forms["numberForm"]["startNum"].value = "";
        document.forms["numberForm"]["endNum"].value = "";
	document.forms["numberForm"]["stepNum"].value = "";
        document.getElementById("displayEvens").style.display = "none";
        document.getElementById("submitButton").innerText="Submit";
        document.forms["numberForm"]["startNum"].focus();
}

function validateForm()
{
        clearErrors();
        var startNum = document.forms["numberForm"]["startNum"].value;
        var endNum = document.forms["numberForm"]["endNum"].value;
	var stepNum = document.forms["numberForm"]["stepNum"].value;
        if(startNum=="" || isNaN(startNum))
        {
                alert("Starting number must be filled in with a number.");
                document.forms["numberForm"]["startNum"].parentElement.className = "form-group has-error";
                document.forms["numberForm"]["startNum"].focus();
                return false;
        }
        if (endNum=="" || isNaN(endNum))
        {
                alert("Ending Number must be filled in with a number.");
                document.forms["numberForm"]["endNum"].parentElement.className = "form-group has-error";
                document.forms["numberForm"]["endNum"].focus();
                return false;
        }
	if (stepNum=="" || isNaN(stepNum))
	{
		alert("Step number must be filled in with a number.");
		document.forms["numberForm"]["stepNum"].parentElement.className = "form-group has-error";
		document.forms["numberForm"]["stepNum"].focus();
	}
	if (stepNum < 1)
	{
		alert("Step number must be positive.");
		document.forms["numberForm"]["stepNum"].parentElement.className = "form-group has-error";
		document.forms["numberForm"]["stepNum"].focus();
	}
	if (endNum <= startNum)
	{
		alert("Ending Number must be greater than starting number.");
		document.forms["numberForm"]["startNum"].parentElement.className = "form-group has-error";
		document.forms["numberForm"]["endNum"].parentElement.className = "form-group has-error";
		document.forms["numberForm"]["startNum"].focus();
	}
        document.getElementById("displayEvens").style.display = "block";
       	document.getElementById("submitButton").innerText = "Recalculate";
	findEvens(startNum, endNum, stepNum);
       	return false;
}
