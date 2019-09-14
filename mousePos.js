/*
Author: Lindsay Nickalo
Email: bradleyL4@winthrop.edu
Date: September 13, 2019
Purpose: JavaScript for mouse Position html
*/

var isMouseTracking = false;

function toggleTracking()
{
	isMouseTracking = !isMouseTracking;
	if(isMouseTracking)
	{
		document.getElementById("trackingStatus").innerText = "TRACKING";
	}
	else
	{
		document.getElementById("trackingStatus").innerText = "NOT TRACKING";
	}
}

function updateMousePosition()
{
        if(isMouseTracking)
        {
                var x = document.getElementById("mousePosX");
                x.innerText = event.clientX;
                var y = document.getElementById("mousePosY");
                y.innerText = event.clientY;
        }
}

