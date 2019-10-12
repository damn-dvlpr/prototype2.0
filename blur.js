// setInterval(function(){								//to handle pagination for larger webPages

	var size = document.images.length;				//to get number of images in DOM
	for(i = 0; i < size; i++){
		document.images[i].style.filter = "blur(30px)";	
		// console.log(url);	
	} 
	for(i = 0; i < size; i++){
		var url=document.images.item(i).src;       //to get url of all images in the DOM
		document.images[i].style.filter = "blur(30px)";	
		// console.log(url);	
		loadDoc(i);
	} 
// },2000);

function loadDoc(i) {
	console.log("loaddoc called");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		  if (this.readyState == 4 && this.status == 200) {
		// document.getElementsByTagName("").innerHTML = this.responseText;
			selectiveBlur(this.responseText,i);								//function still to be written to render blurring
		  }
	};
	xhttp.open("GET", "http://127.0.0.1:8000/?src="+ url, false);
	// console.log("@@@@@afterxhttp open@@@@@@");
	xhttp.send();
	console.log("@@@@@afterxhttp sent@@@@@@");
}

function selectiveBlur(imgStatus,i){
	// console.log(imgStatus==="True");
	if(imgStatus!='True'){
		x = document.images[i];
		console.log(x);
		x.style.filter = "blur(0px)";
	}	
};