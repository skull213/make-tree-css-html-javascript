function makeStars(iNum){

	var sStars = "";

	for(var iCount=0 ;iCount<iNum; iCount++){
		sStars += "*"; 
	}
	return sStars;
}

function makeTree(iHeight){

	var sTree = "";
	for(var iCount=1;iCount<=iHeight;iCount++){
		sTree += makeStars(iCount) + "<br />";

	}
	sTree += makeStars(1);
	return sTree;
}

//------------------------------------------------------------------------------------------


window.onload = function(){

	var oPlantTree = document.querySelector("#draw");
	oPlantTree.onclick = function(){

	
		var oTreeSize = oPlantTree.previousElementSibling;
		var oColor2 = oTreeSize.previousElementSibling;
		var oColor = oColor2.previousElementSibling;
		var oGreet = oColor.previousElementSibling;

		var oDiv = document.getElementById("photo");
		oDiv.innerHTML = makeTree(oTreeSize.value);
		oDiv.style.backgroundColor = oColor.value;
		var oGreeting = document.getElementById("greetingText");
		oGreeting.innerHTML = oGreet.value;
		var oBackgroundColor = document.getElementById("container")
		oBackgroundColor.style.backgroundColor = oColor2.value;


	
	};

};