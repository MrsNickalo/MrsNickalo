/*
Author: Lindsay Nickalo
Email: bradleyl4@winthrop.edu
Date: September 09, 2019
Purpose: JavaScript for rollDice.html
*/

function rollDice()
{
	return Math.floor(Math.random()*6) + 1;
}

function rollDiceSides(n)
{
	return Math.floor(Math.random()*n) + 1;
}

function rollDiceMulti(n,k)
{
	var output = new Array();
	for(i=0; i<k; i++)
	{
		output[i] = rollDiceSides(n);
//		if(i == 0)
//		{
//			output = rollDiceSides(n);
//		}
//		else
//		{
//			output = output + ", " + rollDiceSides(n);
//		}
	}
	return output;
}
