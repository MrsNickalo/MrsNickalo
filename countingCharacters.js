/*
Author: Lindsay Nickalo
Email: bradleyl4@winthrop.edu
Date: September 09, 2019
Purpose: Practice with Functions
*/

function countingCharacters(stringToCount)
{
	console.log(stringToCount + " has " + stringToCount.length + " characters.");
}

function countingChar(stringToCount, char)
{
	var charCount = 0;
	for(var charPosition = 0; charPosition < stringToCount.length; charPosition++)
	{
		if(stringToCount[charPosition]==char)
		{
			charCount++;
		}
	}
	console.log("String to search in: " + stringToCount);
	console.log("Character to find: " + char);
	console.log("Number of times it appears: " + charCount);
}

function countingChar2(stringToCount, find)
{
	var count = 0;
	var n = find.length;
	var s = stringToCount.length;
	if(n > s)
	{
		console.log("Error! String to find longer than String to search!");
		return;
	}
	else if(n==s)
	{
		if(stringToCount === find)
		{
			count = 1;
		}
		else
		{
			count = 0;
		}
	}
	else
	{
		for(var i=0; i<s - n; i++)
		{
			for(var k=i; k<i+n; k++)
			{
				var check = stringToCount.substring(k, k+n);
//				console.log(check);
			}
			if(check===find)
			{
				count++;
			}
		}
	}
//	console.log("String to search: " + stringToCount);
//	console.log("String to find: " + find);
//	console.log("Number of instances: " + count);
	return count;
}
